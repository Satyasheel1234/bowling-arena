import { FrameModel } from "./frame.model";

export class BoardModel {
    public frames: FrameModel[] = []
    public totalScore: number = 0;
    constructor() {
        for (let i = 1; i < 11; i++) {
            const frame = new FrameModel(i)
            this.frames.push(frame)
        }
    }

    public setTotalBoardScore() {
        this.totalScore = 0
        for (let index = 0; index < this.frames.length; index++) {
            const element = this.frames[index];
            this.totalScore += element.getTotalFrameScore()
        }
    }


}