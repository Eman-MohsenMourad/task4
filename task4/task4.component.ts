import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {  myArray: any[] = [
  { id: 1, name: 'ayoub', username: 'Ghozzi' , phonenumber:'0021685129359'},
  {  id: 1, name: 'ayoub', username: 'Ghozzi' , phonenumber:'0021685129359'},
  {  id: 1, name: 'ayoub', username: 'Ghozzi' , phonenumber: '0021685129359'},
  ];

isFormOpen: boolean = false;

openForm() {
  this.isFormOpen = !this.isFormOpen;
}

item: any = {};

addItem() {
  // Generate a unique ID for the new item
  const newId = this.myArray.length + 1;

  // Add the new item to the array
  const newItem = {
    id: newId,
    name: this.item.name,
    username: this.item.username,
    phonenumber: this.item.phonenumber,
  };
  this.myArray.push(newItem);

  // Clear the form inputs
  this.item={};
  }


}
