import { Controller, Get } from "@nestjs/common";
import { PeopleService } from "./people.service";
import { People } from "./people.entity";

@Controller("personas")
export class PeopleController {

    constructor(private readonly peopleService: PeopleService) { }

    @Get()
    findAll(): Promise<People[]> {
        return this.peopleService.findAll();
    }
}