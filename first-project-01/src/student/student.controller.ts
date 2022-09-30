// student.controller.ts
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudent();
  }

  @Post('/:name/:id')
  createStudent(@Param('name') name: string, @Param('id') id: string) {
    return this.studentService.createStudent(name, id);
  }

  @Delete('/delete')
  deleteStudent(@Query('id') id: string) {
    return this.studentService.deleteStduent(id);
  }

  @Patch()
  updateStudent() {
    return this.studentService.updateStudent('201720799');
  }
}
