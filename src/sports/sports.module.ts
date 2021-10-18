import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportsController } from './sports.controller';
import { SportsRepository } from './sports.repository';
import { SportsService } from './sports.service';

@Module({
  imports: [TypeOrmModule.forFeature([SportsRepository])],

  controllers: [SportsController],
  providers: [SportsService]
})
export class SportsModule {}
