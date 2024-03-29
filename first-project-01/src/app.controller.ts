// app.controller.ts
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello2/:id')
  getHello2(@Param('id') id: string): string {
    return this.appService.getHello2(id);
  }

  @Get('/hello1')
  getHello1(@Query('name') name: Request) {
    return this.appService.getHello1(name);
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  testGet(): string {
    return this.appService.testGet();
  }

  @Post()
  testPost(): string {
    return this.appService.testPost();
  }

  @Patch()
  testPatch(): string {
    return this.appService.testPatch();
  }

  @Put()
  testPut(): string {
    return this.appService.testPut();
  }

  @Delete()
  testDelete(): string {
    return this.appService.testDelete();
  }
}
