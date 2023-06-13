import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  // Inyeccion de dependencias, similar a instanciar un objeto
  constructor(private httpClient: HttpClient) { }

  // Método ngOnInit similar al constructur, se ejcuta después del constructor
  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    // this.updateProduct();
    this.deleteProduct();
  }

  getProducts() {
    // Peticion del API y esperando una respuesta
    // Para traer la data desde el backend
    // Suscribe para usar promesas y observables
    // Se recibe una peticion y se asigna una respuesta
    const url = 'https://api.escuelajs.co/api/v1/products'
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  createProduct() {
    const data = {
      title: "zapatos Nike",
      price: 3,
      description: "zapatos / Roberto Huilco",
      categoryId: 2,
      images: ["https://picsum.photos/640/640?r=4213", "https://picsum.photos/640/640?r=7623", "https://picsum.photos/640/640?r=9048"]
    }

    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  updateProduct() {
    const data = {
      tittle: "Zapatos adidas / Roberto Huilco Actualizar",
      price: 45,
      description: "Zapatos deportivos de color blanco",
    }

    const url = 'https://api.escuelajs.co/api/v1/products/268';
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/271';
    this.httpClient.delete(url).subscribe(
      response => {
        console.log(response);
      });
  }


}