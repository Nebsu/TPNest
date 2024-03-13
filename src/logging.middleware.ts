import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private count = 0;

  use(req: Request, res: Response, next: NextFunction) {
    this.count++;
    console.log(`${this.count}. ${req.method} ${req.url} ${req.ip}`);
    next();
  }
}