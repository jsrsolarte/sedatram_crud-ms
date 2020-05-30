import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from './people.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
  ) {}

  async findAll(): Promise<People[]> {
    return await this.peopleRepository.find();
  }

  async save(person: People) {
    await this.peopleRepository.save(person);
  }

  async findByIdNumber(idNumber: number): Promise<People> {
      return await this.peopleRepository.findOne({where: {idNumber: idNumber}});
  }
}
