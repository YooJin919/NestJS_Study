// student.controller.ts
import { Controller, Delete, Get, Param, Put, Query } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  getAllCats() {
    return this.catService.getAllCats();
  }
  // http://localhost:3000/cat?name=yellow&age=3
  @Put()
  createCat(@Query('name') name: string, @Query('age') age: string) {
    return this.catService.createCat(name, age);
  }

  // http://localhost:3000/yellow
  @Delete('/:name')
  deleteCat(@Param('name') name: string) {
    return this.catService.deleteCat(name);
  }
}
