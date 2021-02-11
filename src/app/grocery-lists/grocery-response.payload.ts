import { ItemResponse } from "./item-response.payload";

export interface GroceryResponse {
  listId: number;
  listName: String;
  items: ItemResponse[];
}