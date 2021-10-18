import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    // @Get(':id')
    // get(@Param() params) {
    //     return this.usersservice.getUser(params.id);
    // }

    @Post('createuser')
    create(@Body() user: User) {
        return this.usersService.createUser(user);
    }
    @Get('allusers')
    async findAll(): Promise<CreateUserDto[]> {
      return await this.usersService.findAll() as CreateUserDto[];
    }



    // @Put()
    // update(@Body() user: User) {
    //     return this.usersservice.updateUser(user);
    // }

    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.usersservice.deleteUser(params.id);
    // }
}
