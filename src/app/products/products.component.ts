import { Component } from '@angular/core';
import { RecordsService } from '../records.service';


@Component({
  selector: 'app-products1',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ RecordsService ]
})
export class ProductsComponent {
  inforeceive1: string[] = [];
  inforeceive2: string[] = [];
  inforeceive3: string[] = [];

  constructor(private rservice: RecordsService) {}

  getInfoFromServiceClass1(): void {
    this.inforeceive1 = this.rservice.getinfo1(); // Should work now
  }

  getInfoFromServiceClass2(): void {
    this.inforeceive2 = this.rservice.getinfo2(); // Should work now
  }

  getInfoFromServiceClass3(): void {
    this.inforeceive3 = this.rservice.getinfo3(); // Should work now
  }
}