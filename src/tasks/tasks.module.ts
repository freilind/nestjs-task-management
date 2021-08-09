import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from 'src/tasks/tasks.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository]), AuthModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
