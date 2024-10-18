import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { BackLayoutComponent } from './layouts/back-layout/back-layout.component';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: '',
        component: FrontLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                data: {
                    title: 'หน้าหลัก'
                }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    title: 'เกี่ยวกับเรา'
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    title: 'ต่อต่อเรา'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'เข้าสุ่ระบบ'
                }
            },
            {
                path: 'registor',
                component: RegisterComponent,
                data: {
                    title: 'ลงทะเบียน'
                }
            }
        ]
    },
    {
        path: 'backend',
        component: BackLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];
