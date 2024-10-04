import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrl: './formdemo.component.css'
})
export class FormdemoComponent {
  submit(login: NgForm){
console.log("Form Submitted",login);
}}
