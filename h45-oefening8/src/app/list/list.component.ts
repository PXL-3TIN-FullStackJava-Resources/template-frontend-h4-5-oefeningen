import { Component, Input, OnInit } from '@angular/core';
import { Aquarium } from '../models/aquarium.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() dataset: Aquarium[];
  filteredDataset: Aquarium[];
  searchTerm: string;
  constructor() { }

  ngOnInit(): void {
    this.filteredDataset = this.dataset;
  }

  catchSearch(event: string){
    this.searchTerm = event;
    this.filteredDataset = this.dataset.filter((obj) => obj.name.includes(event));
  }

}
