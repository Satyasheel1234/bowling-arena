export class FrameModel {
    private spare: boolean = false
    private strike: boolean = false
    public first_hit: number = 0 
    public second_hit: number = 0 
    public bonus_score: number = 0
    public maxPoints: number = 10
    constructor(public frame_number: number) {
    }

    public setTotalFrameScore(hit: string, number: number) {
        if('first_hit' == hit){
            this.first_hit = number
            if(this.first_hit == 10){// strike
                this.setStrike(true)
            }
        }else{ // second hit
            this.second_hit = number
            if(this.first_hit + this.second_hit == 10){ // spare
                this.setSpare(true)
            }
        }
        
    }

    getTotalFrameScore(){
        return this.first_hit + this.second_hit + this.bonus_score
    }

    private setSpare(flag){
        this.spare = flag;
    }
    private setStrike(flag){
        this.strike = flag
    }

    public isSpare() {
        return this.spare;
    }
    
    public isStrike() {
        return this.strike
    }

    public setBonusScore(score: number){
        this.bonus_score += score;
    }
}