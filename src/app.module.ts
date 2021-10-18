import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SportsModule } from './sports/sports.module';

@Module({
  imports: [
    UsersModule,
    SportsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ankur',
      database: 'mysqldemo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SportsModule,
  //   con.connect(function(err){
  //     if(err) throw err;
  //     console.log('connected!');
  // });
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
