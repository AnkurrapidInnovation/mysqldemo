import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.entity";


@EntityRepository(User)
export class UsersRepository  extends Repository<User> {
    

async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName } = createUserDto;

    const user = this.create({
      firstName,
    lastName,
     
    });

    await this.save(user);
    return user;
  }
}