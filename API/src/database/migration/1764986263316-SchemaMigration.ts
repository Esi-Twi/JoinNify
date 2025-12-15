import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1764986263316 implements MigrationInterface {
    name = 'SchemaMigration1764986263316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "creatorId" integer NOT NULL, "title" character varying NOT NULL, "location" character varying NOT NULL, "capacity" integer NOT NULL, "ticket_price" integer NOT NULL, "start_date" TIMESTAMP NOT NULL DEFAULT now(), "end_date" TIMESTAMP NOT NULL DEFAULT now(), "images" text array, "ticketsSold" integer NOT NULL, "is_approved" boolean NOT NULL, "feature_event" boolean NOT NULL, "deleted" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event_attendees" ("event_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_feec393bf33d7694dcde8da98e0" PRIMARY KEY ("event_id", "user_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c296e70709cd6f4cb6b4e3e7e2" ON "event_attendees" ("event_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ff98c4d7c3e85237115140cf69" ON "event_attendees" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "event_attendees" ADD CONSTRAINT "FK_c296e70709cd6f4cb6b4e3e7e2a" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event_attendees" ADD CONSTRAINT "FK_ff98c4d7c3e85237115140cf69e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_attendees" DROP CONSTRAINT "FK_ff98c4d7c3e85237115140cf69e"`);
        await queryRunner.query(`ALTER TABLE "event_attendees" DROP CONSTRAINT "FK_c296e70709cd6f4cb6b4e3e7e2a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ff98c4d7c3e85237115140cf69"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c296e70709cd6f4cb6b4e3e7e2"`);
        await queryRunner.query(`DROP TABLE "event_attendees"`);
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
