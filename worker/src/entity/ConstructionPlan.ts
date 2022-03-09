import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export default class ConstructionPlan {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  notice_public_date?: string;

  @Column()
  notice_private_date?: string;

  @Column()
  move_in_date?: string;
}

