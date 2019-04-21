import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  numberInterval;
  lastNum = 0
  @Output() gameStarted = new EventEmitter<number>();
  // @Output() gameStopped = new EventEmitter<{numberEvent:number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.numberInterval = setInterval(() => {  
      this.gameStarted.emit(this.lastNum + 1)
      this.lastNum ++ 
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.numberInterval)
  }
}
