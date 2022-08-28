import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoardModel } from '../model/board.model';
import { FrameModel } from '../model/frame.model';
import { PagesService } from '../pages.service';
@Component({
  selector: 'app-bowling-board',
  templateUrl: './bowling-board.component.html',
  styleUrls: ['./bowling-board.component.scss']
})
export class BowlingBoardComponent implements OnInit {
  public userName;
  public board: BoardModel;
  public currentFrame: number;
  public prevFrame: number = -1;
  public pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  constructor(private pagesService: PagesService) {
    pagesService.serviceUserName$.subscribe(res => {
      this.userName = res;
    })
    pagesService.serviceBoard$.subscribe(res => {
      this.board = res;
    })
    pagesService.serviceCurrentFrame$.subscribe(res => {
      this.currentFrame = res;
    })
    pagesService.servicePrevFrame$.subscribe(res => {
      this.prevFrame = res
    })
  }

  ngOnInit(): void {
  }

  public totalPins(): number[] {
    return this.pins
  }

  public onHitChange(frameNumber: number, action: string, value) {
    this.pagesService.onHitChange(frameNumber, action, value)
  }
  
  getTotalScore(index, item: FrameModel) {
    return this.currentFrame > index ? this.getCumulativeScore(index,item) : 0
  }

  public getCumulativeScore(index, item){
    let sum = 0
    for (let i = 0; i <= index; i++) {
      const element = this.board.frames[i];
      sum += element.getTotalFrameScore()
    }
    return sum;
  }


  public resetBoard(){
    this.pagesService.setBoard(new BoardModel())
    this.pagesService.setCurrentFrame(0)
    this.pagesService.setPrevFrame(-1)
  }

}
