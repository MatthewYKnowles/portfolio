import {Injectable} from '@angular/core';

@Injectable()
export class ConnectFourService {
  private context: CanvasRenderingContext2D;

  setContext(canvasContext: CanvasRenderingContext2D) {
    this.context = canvasContext;
  }

  drawPiece(column: number, row: number, color: string) {
    const ctx = this.context;
    const radius = 45;
    const startAngle = 0;
    const finishAngle = 2 * Math.PI;
    const yAxisCenterPoint = (row) * 100 - 50;
    const xAxisCenterPoint = column * 100 - 50;
    ctx.beginPath();
    ctx.arc(xAxisCenterPoint, yAxisCenterPoint, radius, startAngle, finishAngle);
    ctx.fillStyle = color;
    ctx.fill();
  }

  drawBoard(): void {
    this.drawBackground();
    for (let row = 6; row >= 0; row--) {
      for (let column = 7; column > 0; column--) {
        this.drawPiece(column, row, 'white');
      }
    }
  }

  private drawBackground() {
    const ctx = this.context;
    ctx.fillStyle = '#e6e600';
    ctx.fillRect(0, 0, 700, 600);
  }
}
