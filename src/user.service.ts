import { Inject, Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UserService {
  private users = [];
  private loggedInUser = null;
  private idCount = 1;
  
  createUser(username: string, password: string) {
    const newUser: User = { id:this.idCount++, username:username, password:password };
    console.log("username = "+ username);
    const user = this.findUserByUsername(username);
    if (user) {
      return "user already exists";
    }
    this.users.push(newUser);
    return newUser;
  }
  
  deleteUser(username: string) {
    this.users = this.users.filter(user => user.username !== username);
  }
  
  findUserByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  getUsers() {
    return this.users;
  }

  loginUser(username: string, password: string) {
    const user = this.findUserByUsername(username);
    if (user && user.password === password) {
      this.loggedInUser = user;
      return 'you are connected';
    }
    return 'wrong username or password';
  }

  logoutUser() {
    if (this.loggedInUser == null) {
      return 'you are not connected';
    }
    this.loggedInUser = null;
    return 'disconnection';
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }
}