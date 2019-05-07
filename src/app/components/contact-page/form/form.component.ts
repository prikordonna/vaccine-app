import { Component, OnInit, ViewChild } from '@angular/core';

import { Mail } from '../../../models/mail';
import { MailService } from '../../../services/mail.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('addMailForm') public addMailForm: NgForm;
  mail: Mail = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private mailService: MailService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  
  showSuccess(){
    this.toastr.success('Дякуємо за звернення!', 'Ваша заявка відправлена',{
      positionClass: 'toast-bottom-center'
    });
  } 

  onSubmit(): void {
    if (this.mail.name != '' && this.mail.email != ''
      && this.mail.message != '') {
      this.mailService.addMail(this.mail);

      this.mail.name = '';
      this.mail.email = '';
      this.mail.message = '';
      
    }
    this.addMailForm.reset();
  }  

  processForm() {
    const allInfo = `My name is ${this.mail.name}. My email is ${this.mail.email}. My message is ${this.mail.message}`;
    alert(allInfo);
  }
}
