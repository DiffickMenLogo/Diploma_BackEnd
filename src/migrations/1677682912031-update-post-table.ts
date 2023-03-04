import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePostTable1677682912031 implements MigrationInterface {
    name = 'updatePostTable1677682912031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT 'Енотик', "email" character varying NOT NULL, "password" character varying NOT NULL, "avatarURL" character varying NOT NULL DEFAULT 'http://res.cloudinary.com/nazdac/image/upload/v1616652013/travelAppFolder/dmlfcuvyr79gpkbgg639.jpg', "settings" text NOT NULL, "statistics" text NOT NULL DEFAULT '[]', "words" text NOT NULL DEFAULT '[]', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
