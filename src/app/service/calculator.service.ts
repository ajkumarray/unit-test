import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  /**
   * add two numbers
   * @param a 
   * @param b 
   * @returns 
   */
  public add(a: number, b: number) {
    this.logger.log(`Adding ${a} and ${b}`);
    return a + b;
  }

  /**
   * Subtract a from b
   * @param a 
   * @param b 
   * @returns 
   */
  public subtract(a: number, b: number) {
    this.logger.log(`Subtracting ${b} from ${a}`);
    return a - b;
  }

  /**
   * multiply two numbers
   * @param a 
   * @param b 
   * @returns 
   */
  public multiply(a: number, b: number) {
    this.logger.log(`Multiplying ${a} and ${b}`);
    return a * b;
  }

  /**
   * division of two numbers
   * @param a 
   * @param b 
   * @returns 
   */
  public divide(a: number, b: number) {
    this.logger.log(`Dividing ${a} by ${b}`);
    if (b === 0) {
      throw new Error('Division by Zero!');
    }
    return a / b;
  }
}
