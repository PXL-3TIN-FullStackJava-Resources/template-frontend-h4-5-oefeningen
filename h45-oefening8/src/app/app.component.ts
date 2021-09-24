import { Component, OnInit } from '@angular/core';
import { Aquarium } from './models/aquarium.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Lets build secure angular apps (and aquariums)!";
  dataset: Aquarium[];

  ngOnInit(): void {
    this.dataset = [
      new Aquarium("Superfish Qubiq 60 Pro Zwart aquarium", "60 liter", "glas", "https://media.s-bol.com/RP10AxBLkL8L/168x189.jpg"),
      new Aquarium("Maxxpro Set ", "18 liter", "plexiglas", "https://media.s-bol.com/RP10AxBLkL8L/168x189.jpg"),
      new Aquarium("Ciano aquarium 60 Led", "58 liter", "glas", "https://media.s-bol.com/g1Mp0gQAAZ3/124x210.jpg"),
    ];
  }
}
