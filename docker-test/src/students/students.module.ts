// student.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './students.controller';
import { Students } from './students.entity';
import { StudentService } from './students.service';

@Module({
  imports: [TypeOrmModule.forFeature([Students])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
