import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.css']
})
export class HeaderProductsComponent {
  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() itemsCountChange = new EventEmitter<number>();

  sort = 'desc'
  showItemsCount = 12

  onUpdatedSort(newSort : string) : void {
    this.sort = newSort
  }

  onItemsCount(count : number) : void {
    this.showItemsCount = count
  }

  onColumnsUpdated(colsNum : number) : void {
    this.columnsCountChange.emit(colsNum)
    
  } 
}
