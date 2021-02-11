import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListsComponent } from './grocery-lists/grocery-lists.component';

const routes: Routes = [
  { path: 'grocery-lists', component: GroceryListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
