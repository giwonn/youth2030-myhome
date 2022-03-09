import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Location {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  year!: number;

  @Column()
  num!: number;

  @Column()
  address?: string;

  @Column()
  nearBySubway!: string;
}