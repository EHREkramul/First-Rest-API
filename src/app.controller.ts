import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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


  //Database Works
  @Post("/db/insertUser") // Insert user data.
  insertUser(@Body() data) {
    return this.appService.insertUser(data);
  }

  @Get("/db/userInfo") // Get all users.
  getUserInfo() {
    return this.appService.getUserInfo();
  }

  @Get("/db/userInfo/:id") // Get user by id.
  getUserInfoById(@Param("id") id) {
    return this.appService.getUserInfoById(id);
  }

  @Delete("/db/deleteUser/:id") // Delete user by id.
  deleteUser(@Param("id") id) {
    return this.appService.deleteUser(id);
  }

  @Patch("/db/updateUser/:id") // Update user by id.
  updateUser(@Param("id") id, @Body() data) {
    return this.appService.updateUser(id, data);
  }
}
