// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello2(id: string): string {
    return `hello2 id: ${id}`;
  }

  getHello1(name) {
    return `hello1 name: ${name}`;
  }

  testGet(): string {
    return 'Get Test!';
  }

  getHello(): string {
    return 'Hello World!';
  }

  testPost(): string {
    return 'Post Test!';
  }

  testPatch(): string {
    return 'Patch Test!';
  }

  testPut(): string {
    return 'Put Test!';
  }

  testDelete(): string {
    return 'Delete Test!';
  }
}
