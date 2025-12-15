import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1764989970396 implements MigrationInterface {
    name = 'SchemaMigration1764989970396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "ticketsSold" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "is_approved" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "feature_event" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "deleted" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "deleted" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "feature_event" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "is_approved" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "ticketsSold" SET NOT NULL`);
    }

}
