import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = environment.baseURLAPI

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private http = inject(HttpClient)

  // constructor() { }
  // Get All Products
  getAllProducts() {
    return this.http.get(
      this.apiURL + 'products',
      this.httpOptions
    )
  }

  // Get Single Product
  getProduct(id: number) {
    return this.http.get(
      this.apiURL + 'products/' + id,
      this.httpOptions
    )
  }

  // Add Product
  addProduct(product: any) {
    return this.http.post(
      this.apiURL + 'products',
      JSON.stringify(product),
      this.httpOptions
    )
  }

  // Update Product
  updateProduct(id: number, product: any) {
    return this.http.put(
      this.apiURL + 'products/' + id,
      JSON.stringify(product),
      this.httpOptions
    )
  }

  // Delete Product
  deleteProduct(id: number) {
    return this.http.delete(
      this.apiURL + 'products/' + id,
      this.httpOptions
    )
  }

}
