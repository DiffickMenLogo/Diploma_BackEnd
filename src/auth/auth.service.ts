import { createUserDto } from '../user/dto/createUserDto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../user/entities/user.entity';
import { User } from 'src/types/User';
import * as bycrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async signUp(body: createUserDto): Promise<User> {
    const { email, password, name } = body;
    const findedUser = await this.userRepository.findOne({
      where: { email: body.email },
    });
    if (findedUser) {
      throw new HttpException(
        {
          error: 'This email are alrady used',
          status: HttpStatus.FORBIDDEN,
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return;
    // const newUser = {
    //     name: body.name ? body.name : 'Anon',
    //     email: body.email,
    //     password: await bycrypt.hash(body.password, 10),
    //     settings: {
    //         soundVolume: 50,
    //         musicVolume: 50,
    //         wordVolume: 50,
    //         difficultWord: true,
    //         deleteWord: true,
    //         translateWord: true,
    //         translateSentences: true,
    //         theme: 'deafult'
    //     },

    // } as User
    // if (!findedUser) {
    //   throw new HttpException(
    //     {
    //       error: 'User not found',
    //       status: HttpStatus.NOT_FOUND,
    //     },
    //     HttpStatus.NOT_FOUND,
    //   );
    // }
  }
}
