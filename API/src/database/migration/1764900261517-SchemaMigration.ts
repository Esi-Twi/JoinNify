import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1764900261517 implements MigrationInterface {
    name = 'SchemaMigration1764900261517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "verification_token" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "verification_token_expiry" TIMESTAMP DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verification_token_expiry"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verification_token"`);
    }

}
