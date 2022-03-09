import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Location from './Location';
import SupplyCount from './SupplyCount';
import ConstructionPlan from './ConstructionPlan';

@Entity()
export class SupplyPlan {

  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Location)
  @JoinColumn()
  location!: Location;

  @OneToOne(() => SupplyCount)
  @JoinColumn()
  supplyCount!: SupplyCount;

  @OneToOne(() => ConstructionPlan)
  @JoinColumn()
  constructionPlan!: ConstructionPlan;

  @Column()
  architects?: string;
}


// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
//
// @Entity()
// export class SupplyPlan {
//
//   @PrimaryGeneratedColumn()
//   id!: number;
//
//   @Column()
//   year!: number;
//
//   @Column()
//   num!: number;
//
//   @Column()
//   address?: string;
//
//   @Column()
//   nearBySubway!: string;
//
//   @Column('number', {default: true})
//   totalCount: number = 0;
//
//   @Column('number', {default: true})
//   publicCount: number = 0;
//
//   @Column('number', {default: true})
//   privateCount: number = 0;
//
//   @Column()
//   noticePublicDate?: string;
//
//   @Column()
//   noticePrivateDate?: string;
//
//   @Column()
//   moveInDate?: string;
//
//   @Column()
//   architects?: string;
// }
