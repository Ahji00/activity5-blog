// src/users/users.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id);
    if (user) {
      // remove password before returning
      delete (user as any).password;
    }
    return user;
  }

  // if you have another method that previously set undefined, use delete there too:
  // delete (user as any).password;
}
