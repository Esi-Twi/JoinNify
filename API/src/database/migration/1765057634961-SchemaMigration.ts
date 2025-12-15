import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1765057634961 implements MigrationInterface {
    name = 'SchemaMigration1765057634961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."events_category_enum" AS ENUM('TECH', 'SPORTS', 'HEALTH')`);
        await queryRunner.query(`ALTER TABLE "events" ADD "category" "public"."events_category_enum"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "ticketsSold" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "ticketsSold" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "category"`);
        await queryRunner.query(`DROP TYPE "public"."events_category_enum"`);
    }

}
