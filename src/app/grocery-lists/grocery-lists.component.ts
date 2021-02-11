import { Component, OnInit } from '@angular/core';
import { GroceryResponse } from './grocery-response.payload';
import { GroceryService } from './grocery-service';

@Component({
  selector: 'app-grocery-lists',
  templateUrl: './grocery-lists.component.html',
  styleUrls: ['./grocery-lists.component.css']
})
export class GroceryListsComponent implements OnInit {

  groceryList: GroceryResponse[];

  constructor(private gServ: GroceryService) { 
    this.groceryList = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.gServ.getGroceryLists()
    .subscribe((response:any) => {
      console.log(response);
      for(let list in response){
        console.log(response[list]);
        let gList: GroceryResponse;
        gList = {
          listId: response[list].listId,
          listName: response[list].listName,
          items: response[list].items
        }
        console.log(gList.items);
        this.groceryList.push(gList);
      }
    });
  }

}
