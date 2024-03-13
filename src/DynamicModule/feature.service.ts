import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatureService {
  constructor(private options: Record<string, string>) {}
  
  getFeature(value: string) {
    return this.options[value];
  }

}