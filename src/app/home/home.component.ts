import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  todos = [
      {
        title : 'Node JS',
     desc : 'create a node js application from scratch'},

     {
      title : 'Mongo DB',
   desc : 'administrate a MongoDB database'},

   {
    title : 'Angular',
 desc : 'Use the Angular front-end '},

  ];

  ngOnInit() {
  }

}
