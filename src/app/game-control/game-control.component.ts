import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{numberEvent:string}>();
  @Output() gameStopped = new EventEmitter<{numberEvent:string}>();

  constructor() { }

  ngOnInit() {
  }

  
  onStartGame(nameInput:HTMLInputElement) {
    setInterval(() => {
      console.log('Hello')
    }
    , 3000)
    // this.gameStarted.emit(
    //   {
    //     numberEvent:nameInput.value
    //   }
    // )
  }

  onStopGame(nameInput:HTMLInputElement) {
    this.gameStopped.emit(
      {
        numberEvent:nameInput.value
      }
    )
  }
}
