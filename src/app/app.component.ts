import { Component } from '@angular/core';
declare var $: any;   //Burada juery'i tanımladık. Burada yapılan tanım ile tüm componentlerde kullanılabilir.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
}

// $(document).ready(() => {
//   alert('asd');
// })
