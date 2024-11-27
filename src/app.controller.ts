import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Hello World!';
  }

  @Get("/userInfo")
  getUserData() {
    return this.appService.userInfo();
  }
  
  @Get("/userInfo/:data")
  getbyName(@Param("data") name) {
    return this.appService.userInfobyName(name);
  }

  @Post("/insert")
  insetData(@Body() data) {
    return this.appService.insertData(data);
  }
}
