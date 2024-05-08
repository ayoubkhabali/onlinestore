import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cols = 3

  onColumnsUpdated(colsNum : number) : void {
    this.cols = colsNum
  }

}
