import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { getCustomRepository } from 'typeorm';
import { CreateSportDto } from './dto/create-sport.dto';
import { Sport } from './sport.entity';
import { SportsService } from './sports.service';
import { GetUser } from 'src/auth/get-user.decorator';
import { GetSportsFilterDto } from './dto/get-sports-filter.dto';

@Controller('sports')
export class SportsController {
  constructor(private sportsService: SportsService) {}

  // @Get('allsports')
  // getSports(
  //   @Query() filterDto: GetSportsFilterDto,
  //   @GetUser() user: User,
  // ): Promise<Sport[]> {
  //   return this.sportsService.getSports(filterDto, user);
  // }
      @Get('allsports')
    async findAll(): Promise<CreateSportDto[]> {
      return await this.sportsService.findAll() as CreateSportDto[];
    }
//   @Get('allsports')
//   getAllSport(
//     @Body() createSportDto: CreateSportDto,
//     @GetUser() user: User,
//   ): Promise<Sport> {
//     return this.sportsService.findAll(createSportDto, user);
//   }

  @Post('createsports')
  createSport(
    @Body() createSportDto: CreateSportDto,
    @GetUser() user: User,
  ): Promise<Sport> {
    return this.sportsService.createSport(createSportDto, user);
  }
}
