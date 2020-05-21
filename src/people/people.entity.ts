import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  idNumber: string;

  @Column()
  names: string;

  constructor(idNumber: string, names: string) {
    this.idNumber = idNumber;
    this.names = names;
  }
}
