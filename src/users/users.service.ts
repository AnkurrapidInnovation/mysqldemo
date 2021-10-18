import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UsersRepository) private usersRepository: UsersRepository) { }

    // async getUsers(user: User): Promise<User[]> {
    //     return await this.usersRepository.find();
    // }

    
    createUser(createUserDto:CreateUserDto) : Promise<User>{
       return this.usersRepository.createUser(createUserDto);
    }
  
    async findAll( ): Promise<User[]> {
        try {
          return await this.usersRepository.find({});
        } catch (err) {
          return err;
        }
      }


    // async updateUser(user: User) {
    //     this.usersRepository.save(user)
    // }

    // async deleteUser(user: User) {
    //     this.usersRepository.delete(user);
    // }
}