export class MatchData {

	dateTime: string;
	sr: number;
	srGain: number;

	constructor(dateTime:string, sr:number, srGain:number){
		this.dateTime = dateTime;
		this.sr = sr;
		this.srGain = srGain;
	}

	toString(){
		return this.dateTime + " sr: " + this.sr + " gain: "+ this.srGain;
	}

}
