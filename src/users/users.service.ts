import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: User) {
    this.usersRepository.save(user);
  }

  

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }


  
}
