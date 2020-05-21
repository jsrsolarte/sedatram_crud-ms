import { Controller, Get, Post } from '@nestjs/common';
import { PeopleService } from './people.service';
import { People } from './people.entity';

@Controller('personas')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  findAll(): Promise<People[]> {
    return this.peopleService.findAll();
  }

  @Post()
  save(idNumber: string, names: string) {
    const person = new People(idNumber, names);
    this.peopleService.save(person);
  }
}
