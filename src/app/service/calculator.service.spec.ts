import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  /**
   * Mock of Logger Service
   */
  let loggerSpy: jasmine.SpyObj<LoggerService>;

  /**
   * Stubs for CalculatorService method parameters
   */
  const a: number = 10;
  const b: number = 5;

  beforeEach(() => {
    /**
     * Spy for log method from LoggerService
     */
    const spy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: spy }
      ]
    });
    service = TestBed.inject(CalculatorService);
    loggerSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * spy on LoggerService
   */
  it('should add two numbers', () => {
    service.add(a, b);
    expect(loggerSpy.log).toHaveBeenCalledWith('Adding 10 and 5');
  });

  /**
   * Mock Calculator
   */
  it('should add two numbers with mock', () => {
    expect(service.add(a, b)).toEqual(15);
    expect(loggerSpy.log).toHaveBeenCalledWith('Adding 10 and 5');
  });

  it('should subtract two numbers', () => {
    expect(service.subtract(a, b)).toEqual(5);
    expect(loggerSpy.log).toHaveBeenCalledWith('Subtracting 5 from 10');
  });

  it('should divide two numbers', () => {
    expect(service.divide(a, b)).toEqual(2);
    expect(loggerSpy.log).toHaveBeenCalledWith('Dividing 10 by 5');
  });

  it('should throw error on division by zero', () => {
    expect(() => service.divide(6, 0)).toThrowError('Division by Zero!');
    expect(loggerSpy.log).toHaveBeenCalledWith('Dividing 6 by 0');
  });
});
