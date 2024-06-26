import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // ตัวแปรรับค่า input
  weight?: number;
  height?: number;
  // ตัวแปรแสดงผลลัพธ์
  result?: number;
  result_text?: string = "";

  constructor() {}

  oncal() {
    console.log("w :" + this.weight)
    console.log("h :" + this.height)
    if (this.weight == undefined || this.height == undefined) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
      return;
    }

    var hi = this.height / 100;
    this.result = this.weight / (hi * hi);
    console.log("ผลลัพธ์ :" + this.result)

    if (this.result < 18.5) {
      //console.log("ผอมเกินไป");
      this.result_text ="ผอมเกินไป";
    } else if (this.result >= 18.5 && this.result <=24) {
     // console.log("น้ำหนักปกติ เหมาะสม");
     this.result_text ="น้ำหนักปกติ";
    } else if (this.result >= 25 && this.result < 29.9) {
     // console.log("อ้วน");
     this.result_text ="อ้วน";
    } else {
      //console.log("อ้วนมาก");
      this.result_text ="อ้วนมาก";
    }
  }
}
