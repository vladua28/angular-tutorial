import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: 'Iphone 13 pro max',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ab?',
    },
    {
      name: 'Phone Mini',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ab?',
    },
    {
      name: 'Phone Standart',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
