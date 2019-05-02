import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  fullName: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.fullName}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }
}
