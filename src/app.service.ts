import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  private userData = [];

  userInfo() {
    return this.userData;
  }
  insertData(data) {
    this.userData.push(data);
    return { message: 'Data Inserted', data };
  }
  userInfobyName(name) {
    return (
      this.userData.find((data) => data.name == name) || {
        message: 'Not Found',
      }
    );
  }

  //Database Works
  insertUser(data) {
    // Insert user data.
    return this.repository.save(data); // Save user data to db.
  }
  getUserInfo() {
    // Get all users.
    return this.repository.find(); // Find all users.
  }
  getUserInfoById(id) {
    // Get user by id.
    return this.repository.findOne({ where: { id } }); // Find user by id.
  }
  deleteUser(id) {
    // Delete user by id.
    return this.repository.delete(id); // Delete user by id.
  }
  async updateUser(id, data) {
    // Update user by id.
    if (await this.repository.findOne({ where: { id } })) {
      // Check if user exists.
      return this.repository.update(id, data); // Update user by id.
    } else {
      return { message: 'User not found' }; // Return error message
    }
  }
}
