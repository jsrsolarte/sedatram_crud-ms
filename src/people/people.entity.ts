import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("people")
export class People {
    @PrimaryColumn()
    id: number;

    @Column({ unique: true })
    idNumber: string;

    @Column()
    names: string;
}
