import { Module, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { UserService } from './user.service';
import { LoggingMiddleware } from './logging.middleware';
import { UserController } from './user.controller';
import { DynamicModuleFeatures } from './DynamicModule/feature.module';
import { TaskModule } from './task/task.module';
import { TaskController } from './task/task.controller';

const options: Record<string, string> = { feature: 'TASK' };

@Module({
  imports: [TaskModule, DynamicModuleFeatures.register(options)],
  controllers: [UserController, TaskController],
  providers: [UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*');
  }
}