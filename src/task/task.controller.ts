import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { FeatureService } from 'src/DynamicModule/feature.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService, private featureService: FeatureService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  addTask(@Body('description') description: string) {
    console.log(description);
    return this.taskService.addTask(description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }

  @Post(':id/complete')
  markTaskAsCompleted(@Param('id') id: number) {
    return this.taskService.markTaskAsCompleted(id);
  }

  @Get('feature')
  getFeature(): string{
    return this.featureService.getFeature('feature');
  }
}