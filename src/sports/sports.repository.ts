import { User } from "src/users/users.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateSportDto } from "./dto/create-sport.dto";
import { GetSportsFilterDto } from "./dto/get-sports-filter.dto";
import { Sport } from "./sport.entity";
import { SportsService } from "./sports.service";



@EntityRepository(Sport)
export class SportsRepository extends Repository<Sport> {


  // async getSports(filterDto:GetSportsFilterDto,user:User):Promise<Sport[]>{
  //   const {  search } = filterDto;

  // const query = this.createQueryBuilder('sport');
  // query.where({ user });

  // // if (search) {
  // //   query.andWhere(
  // //     '(LOWER(sport.title) LIKE LOWER(:search) OR LOWER(sport.description) LIKE LOWER(:search))',
  // //     { search: `%${search}%` },
  // //   );
  // // }

  // const sports = await query.getMany();
  // return sports;
  // }

async createSport(createSportDto :CreateSportDto,user:User): Promise<Sport> {
    const { title, description } = createSportDto;

    const sport = this.create({
      title,
      description,
      user,
    
    });

    await this.save(sport);
    return sport;
  }

  // get all sports

  
}