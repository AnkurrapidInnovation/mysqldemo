
import { Exclude } from 'class-transformer';
import { User } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sport {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne((_type) => User, (user) => user.sports, { eager: false })
//   @Exclude({ toPlainOnly: true })
  user: User;


}