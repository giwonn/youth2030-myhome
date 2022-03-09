import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export default class SupplyCount {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column('number', {default: true})
  total: number = 0;

  @Column('number', {default: true})
  public: number = 0;

  @Column('number', {default: true})
  private: number = 0;

}
