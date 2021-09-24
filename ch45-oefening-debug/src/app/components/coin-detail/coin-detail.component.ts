import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coin } from 'src/app/shared/coin.model';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  @Input() muntje: Coin;
  @Input() i:number;
  @Output() coinClickedMit = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.coinClickedEmitter.emit(this.coinDetail);
  }

}
