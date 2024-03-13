import { Module, DynamicModule } from '@nestjs/common';
import { FeatureService } from './feature.service';

export class DynamicModuleFeatures {
    static register(options: Record<string, string>): DynamicModule {
        return {
          module: DynamicModuleFeatures,
          providers: [
            {
              provide: FeatureService,
              useValue: new FeatureService(options),
            },
          ],
          exports: [FeatureService],
        };
      }
}