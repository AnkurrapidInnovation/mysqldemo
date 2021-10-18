import { Sport } from 'src/sports/sport.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:null})
  firstName: string;

 @Column()
 lastName:string;

 @OneToMany((_type) => Sport, (sport) => sport.user, { eager: true })
 sports: Sport[];
 
}
