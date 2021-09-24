import { Component, Input, OnInit } from '@angular/core';
import { Aquarium } from '../models/aquarium.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  @Input() item: Aquarium;
  constructor() { }

  ngOnInit(): void {
  }

}
