// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  // Create a new user with hashed password
  async create(username: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.repo.create({ username, email, password: hashedPassword });
    return this.repo.save(user);
  }

  // Find user by ID
  async findById(id: number): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // Find user by ID (alias for controller)
  async findOne(id: number): Promise<User> {
    return this.findById(id); // reuse findById logic
  }

  // Find user by email
  async findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  // Find user by username
  async findByUsername(username: string): Promise<User | null> {
    return this.repo.findOne({ where: { username } });
  }
  // src/users/users.service.ts (additions)
  async findAll(page = 1, limit = 10) {
    const [items, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { id: 'ASC' },
      relations: ['posts', 'comments'],
      select: ['id', 'username', 'email'], // ensure password excluded
    });
    return { items, total, page, limit };
  }

  async remove(id: number) {
    const user = await this.findById(id);
    return this.repo.remove(user);
  }

}