import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PersonDTO } from './dto/person.dto';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  idNumber: number;

  @Column()
  firstNames: string;

  @Column()
  lastNames: string;


  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  create(person: PersonDTO) {
    this.idNumber = person.idNumber;
    this.modify(person)
  }

  modify(person: PersonDTO) {
    this.firstNames = person.firstNames.toUpperCase();
    this.lastNames = person.lastNames.toUpperCase();
  }
}
