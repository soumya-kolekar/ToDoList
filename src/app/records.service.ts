import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Kurti1", "red", "office wear"];
  info2: string[] = ["Kurti2", "blue", "not office wear"];
  info3: string[] = ["Kurti3", "green", "office wear"];

  getinfo1(): string[] {
    return this.info1;
  }

  getinfo2(): string[] {
    return this.info2;
  }

  getinfo3(): string[] {
    return this.info3;
  }

  constructor() {}
}