import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1764774394889 implements MigrationInterface {
    name = 'SchemaMigration1764774394889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "location" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "location"`);
    }

}
