import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  blocks: number[];
  waterArr: number[];
  sum: number;
  constructor() {
    this.blocks = [4,2,3,2,5,0,1,3];
    this.waterArr = this.water(this.blocks);
    this.sum = this.waterArr.reduce((a, b) => a + b, 0);
  }
  
  private water = function(blocks: number[]): number[]{
  
    const left = [];
    const right = [];
  
    let leftMax = 0;
    let rightMax = 0;
  
    for (let i = 0, j = blocks.length - 1; i < blocks.length, j >= 0; i++, j--) {
      
      leftMax = Math.max(leftMax, blocks[i]);
      left[i] = leftMax;
  
      rightMax = Math.max(rightMax, blocks[j]);
      right[j] = rightMax;
    }
  
    let waterArr = [];
    for (let i = 0; i < blocks.length; i++) {
      let water = Math.min(left[i], right[i]) - blocks[i];
      waterArr.push(water);
    }
  
    return waterArr;
  };

  ngOnInit() {
    let canvas = document.getElementById('canvas');
       
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = "blue";
      for (let i=0; i<=this.waterArr.length; i++) {
        for (let j=1; j<=this.waterArr[i]+this.blocks[i]; j++) {
          ctx.strokeRect(i*20, 300-j*20, 20, -20);
          ctx.fillRect(i*20, 300-j*20, 20, -20);
        }
      }      
      ctx.fillStyle = "#D74022";
      for (let i=0; i<=this.blocks.length; i++) {
        for (let j=1; j<=this.blocks[i]; j++) {
          ctx.strokeRect(i*20, 300-j*20, 20, -20);
          ctx.fillRect(i*20, 300-j*20, 20, -20);
        }
      }
      
    }

  }
}
