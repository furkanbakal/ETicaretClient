import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any;   //Burada juery'i tanımladık. Burada yapılan tanım ile tüm componentlerde kullanılabilir.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
}

$.get("https://localhost:7282/api/products", data =>{
  console.log(data);
});
