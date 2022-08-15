import { Component } from '@angular/core';

@Component({
  selector: 'app-nopageound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopageoundComponent {

  year = new Date().getFullYear();

}
