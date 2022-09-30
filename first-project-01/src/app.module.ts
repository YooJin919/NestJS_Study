// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
