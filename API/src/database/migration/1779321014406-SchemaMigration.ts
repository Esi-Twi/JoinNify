import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1779321014406 implements MigrationInterface {
    name = 'SchemaMigration1779321014406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tickets" ("id" SERIAL NOT NULL, "event_id" integer NOT NULL, "user_id" integer NOT NULL, "unique_number" integer NOT NULL, "expiry" TIMESTAMP NOT NULL DEFAULT now(), "qr_code" character varying NOT NULL, "checked_in" boolean NOT NULL DEFAULT false, "checkin_time" TIMESTAMP DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "eventIdId" integer, "userIdId" integer, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "events" ADD "desc" character varying`);
        await queryRunner.query(`ALTER TYPE "public"."events_category_enum" RENAME TO "events_category_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."events_category_enum" AS ENUM('TECH', 'AI', 'SOFTWARE', 'BLOCKCHAIN', 'CYBERSECURITY', 'STARTUPS', 'HACKATHON', 'BUSINESS', 'ENTREPRENEURSHIP', 'MARKETING', 'SALES', 'FINANCE', 'INVESTING', 'ECONOMICS', 'REAL_ESTATE', 'EDUCATION', 'WORKSHOP', 'SEMINAR', 'TRAINING', 'CERTIFICATION', 'BOOTCAMP', 'CAREER', 'MUSIC', 'CONCERT', 'FESTIVAL', 'ART', 'EXHIBITION', 'FILM', 'PHOTOGRAPHY', 'FASHION', 'DESIGN', 'THEATRE', 'DANCE', 'SPORTS', 'FOOTBALL', 'BASKETBALL', 'TENNIS', 'MARATHON', 'FITNESS', 'YOGA', 'GYM', 'ESPORTS', 'HEALTH', 'MENTAL_HEALTH', 'WELLNESS', 'NUTRITION', 'MEDITATION', 'LIFESTYLE', 'NETWORKING', 'SOCIAL', 'DATING', 'COMMUNITY', 'VOLUNTEERING', 'FOOD', 'DRINKS', 'COOKING', 'BAKING', 'WINE_TASTING', 'FOOD_FESTIVAL', 'TRAVEL', 'TOURISM', 'ADVENTURE', 'HIKING', 'CAMPING', 'GAMING', 'BOARD_GAMES', 'CARD_GAMES', 'COSPLAY', 'COMEDY', 'SPIRITUAL', 'RELIGION', 'PERSONAL_DEVELOPMENT', 'MOTIVATION', 'MINDFULNESS', 'FAMILY', 'KIDS', 'PARENTING', 'EDUCATIONAL_KIDS', 'ENVIRONMENT', 'SUSTAINABILITY', 'CLIMATE', 'ECO_FRIENDLY', 'GOVERNMENT', 'POLITICS', 'CIVIC', 'CHARITY', 'FUNDRAISING', 'NON_PROFIT', 'OTHER')`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "category" TYPE "public"."events_category_enum" USING "category"::"text"::"public"."events_category_enum"`);
        await queryRunner.query(`DROP TYPE "public"."events_category_enum_old"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_c60076703f6879e1fecf5522f31" FOREIGN KEY ("eventIdId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_191b2c1fa23fc7452e1708c0875" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_191b2c1fa23fc7452e1708c0875"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_c60076703f6879e1fecf5522f31"`);
        await queryRunner.query(`CREATE TYPE "public"."events_category_enum_old" AS ENUM('TECH', 'SPORTS', 'HEALTH')`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "category" TYPE "public"."events_category_enum_old" USING "category"::"text"::"public"."events_category_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."events_category_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."events_category_enum_old" RENAME TO "events_category_enum"`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "desc"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
    }

}
