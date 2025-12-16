import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1765839462705 implements MigrationInterface {
    name = 'SchemaMigration1765839462705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_password_token"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_password_token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_password_token"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_password_token" integer`);
    }

}
