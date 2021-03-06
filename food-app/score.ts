import { Scoreable } from "./interface";
import { Foods } from "./foods";
export class Score implements Scoreable{
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0);
  }
  
  private constructor() {}
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }

  render () {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
}

