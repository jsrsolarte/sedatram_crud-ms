import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { People } from './people.entity';
import { PersonDTO } from './dto/person.dto';
import { Response } from 'express';

@Controller('personas')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  findAll(): Promise<People[]> {
    return this.peopleService.findAll();
  }

  @Post()
  async create(@Res() res: Response, @Body() personDTO: PersonDTO) {
    const person = new People();
    person.create(personDTO);

    this.peopleService
      .save(person)
      .then(() => res.status(HttpStatus.CREATED).send())
      .catch(err => res.status(HttpStatus.CONFLICT).send(err.message));
  }

  @Post(':idNumber')
  async update(
    @Res() res: Response,
    @Body() personDTO: PersonDTO,
    @Param() params,
  ) {
    const person = await this.peopleService.findByIdNumber(params.idNumber);

    person.modify(personDTO);

    this.peopleService
      .save(person)
      .then(() => res.status(HttpStatus.CREATED).send())
      .catch(err => res.status(HttpStatus.CONFLICT).send(err.message));
  }

  @Get(':idNumber')
  async findByIdNumber(@Res() res: Response, @Param() params) {
    this.peopleService
      .findByIdNumber(params.idNumber)
      .then(response => res.status(HttpStatus.OK).send(response))
      .catch(err => res.status(HttpStatus.CONFLICT).send(err.message));
  }
}
