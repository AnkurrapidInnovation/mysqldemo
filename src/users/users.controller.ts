import { Controller, Get, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}


//   @Post('create users')
//   create(@Body() user: User) {
//       return this.usersService.createUser(user);
//     }

 

  @Get('getallusers')
  findAll() {
    return this.usersService.findAll();
  }
}
