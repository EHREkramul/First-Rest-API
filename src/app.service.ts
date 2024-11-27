import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private userData = [];

  userInfo() {
    return this.userData;
  }
  insertData(data) {
    this.userData.push(data);
    return {message: "Data Inserted", data};
  }
  userInfobyName(name) {
    return this.userData.find((data) => data.name == name)||{message: "Not Found"};
  }
}
