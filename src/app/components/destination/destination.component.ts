import { IDestinationDetails } from './destination-details';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, observable, of } from 'rxjs';

@Component({
  selector: 'destination',
  templateUrl: './destination.component.html'
})
export class DestinationComponent implements OnInit {

  destinations: Array<IDestinationDetails>;

  constructor() { 
    this.destinations = [
      {        
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      },
      {
       id: 1,
       name: 'First Destination',
       description: 'First Description',
       characteristics: [1, 2, 3],
       location: 'First Location',
       rating: 1,
      }
    ];  
  
  }

  ngOnInit() {


  }
}