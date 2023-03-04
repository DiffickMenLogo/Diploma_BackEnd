import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bycrypt from 'bcryptjs';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'Енотик' })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    default:
      'http://res.cloudinary.com/nazdac/image/upload/v1616652013/travelAppFolder/dmlfcuvyr79gpkbgg639.jpg',
  })
  avatarURL: string;

  async checkPass(password: string) {
    return await bycrypt.compare(this.password, password);
  }
}

export default UserEntity;
