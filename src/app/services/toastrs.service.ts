import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrsService {

  constructor(private toastr: ToastrService) { }

  success () {
    this.toastr.success('Дякуємо за звернення!', 'Ваша заявка відправлена',{
      positionClass: 'toast-bottom-center'
    });
  }

  edit () {
    this.toastr.success('Редагування успішне!', 'Зміни встипили в дію',{
      positionClass: 'toast-bottom-center'
    });
  }

  cancel () {
    this.toastr.warning('Відміна збереження!', 'Дані не збережені в профілі',{
      positionClass: 'toast-bottom-center'
    });
  }

  warning () {
    this.toastr.warning('Ви видалили елемент', 'Статус: Успішно',{
      positionClass: 'toast-bottom-center'
    });
  }

  error () {
    this.toastr.error('Зауваження', 'Повідомлення про помилку',{
      positionClass: 'toast-bottom-center'
    });
  }
}
