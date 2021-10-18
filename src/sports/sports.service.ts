import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { CreateSportDto } from './dto/create-sport.dto';
import { GetSportsFilterDto } from './dto/get-sports-filter.dto';
import { Sport } from './sport.entity';
import { SportsRepository } from './sports.repository';

@Injectable()
export class SportsService {
   constructor (
       @InjectRepository(SportsRepository) private sportsRepository: SportsRepository,
       
   ) {}

   async getSportById(id: string): Promise<Sport> {
    const found = await this.sportsRepository.findOne(id);

    // if (!found) {
    //   throw new NotFoundException(`sport with ID "${id}" not found`);
    // }

    return found;
  }

  // getall sports

  
//   getSports(filterDto: GetSportsFilterDto, user: User): Promise<Sport[]> {
//     return this.sportsRepository.getSports(filterDto, user);
//   }

async findAll( ): Promise<Sport[]> {
    try {
      return await this.sportsRepository.find({});
    } catch (err) {
      return err;
    }
  }

  
// create Sport
createSport(createSportDto: CreateSportDto,user:User): Promise<Sport> {
    return this.sportsRepository.createSport(createSportDto,user);
  }

}






