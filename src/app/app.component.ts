import { Component, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ActivatedRoute,
         NavigationEnd,
         Route,
         Router,
         RouterOutlet
 } from '@angular/router';    

import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // constructor(
  //   private router: Router,
  //   private tiltieService: Title
  // ){}

  private router = inject(Router)
  private titleService = inject(Title)

  // title = 'ng17app-demo';
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root
        const routeData = this.getRouteData(currentRoute)
        const title = routeData ? routeData.title : 'Stock Management'
        this.titleService.setTitle(`${title} - Stock Management`)
      })
  }

  private getRouteData(route: ActivatedRoute): any {
    let data = null;
    if (route.firstChild) {
      data = this.getRouteData(route.firstChild)
    } else {
      data = route.snapshot.data;
    }
    return data
  }
}
