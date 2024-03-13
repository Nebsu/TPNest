import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { UserService } from '../user.service';

@Module({
  exports: [TaskService],
  providers: [TaskService, UserService],
})
export class TaskModule {}