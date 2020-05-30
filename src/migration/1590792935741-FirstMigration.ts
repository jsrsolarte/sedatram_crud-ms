import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1590792935741 implements MigrationInterface {
    name = 'FirstMigration1590792935741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `people` (`id` int NOT NULL AUTO_INCREMENT, `idNumber` int NOT NULL, `firstNames` varchar(255) NOT NULL, `lastNames` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_7b9215190d98b31ef4a1c601dc` (`idNumber`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_7b9215190d98b31ef4a1c601dc` ON `people`", undefined);
        await queryRunner.query("DROP TABLE `people`", undefined);
    }

}
