// student.service.ts
import { Injectable } from '@nestjs/common';
import { CatRepository } from './cat.repository';

@Injectable()
export class CatService {
  constructor(private catRepository: CatRepository) {}

  getAllCats() {
    return this.catRepository.catTable;
  }
  createCat(name: string, age: string): string {
    const newData = { name: name, age: age };
    this.catRepository.catTable.push(newData);
    return '고양이 등록완료';
  }

  deleteCat(name: string) {
    for (let i = 0; i < this.catRepository.catTable.length; i++) {
      if (this.catRepository.catTable[i].name === name) {
        this.catRepository.catTable.splice(i, 1);
        return '고양이 삭제완료';
      }
    }
    return '고양이 삭제실패';
  }
}
