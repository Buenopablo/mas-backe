import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1619999321044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'activies',
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "activy_date",
                        type: "varchar",
                    },
                    {
                        name: "course_unit_id",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timesTamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies");
    }

}

