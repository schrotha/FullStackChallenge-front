import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { GroceryResponse } from "./grocery-response.payload";
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Injectable({
  providedIn: 'root',
})
export class GroceryService {

  constructor(private http:HttpClient){}

  getGroceryLists(): any {
    return this.http.get(`http://localhost:8080/list/grocery-lists`);
  }
}