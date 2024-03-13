import { Controller, Post, Delete, Param, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
    
  @Post()
  createUser(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.createUser(username, password);
  }

  @Delete(':username')
  deleteUser(@Param('username') username: string) {
    return this.userService.deleteUser(username);
  }

  @Get()
  getUsers() {
      return this.userService.getUsers();
  }

  @Post('login/:username')
  loginUser(@Param('username') username: string, @Body('password') password: string) {
    return this.userService.loginUser(username, password);
  }

  @Post('logout')
  logoutUser() {
    return this.userService.logoutUser();
  }

}