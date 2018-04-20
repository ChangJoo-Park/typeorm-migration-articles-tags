import {MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey} from "typeorm";

export class TagCreate1524178909455 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'tag',
            columns: [
                {
                    name: 'id',
                    // MySql은 int, Sqlite는 integer
                    type: 'integer',
                    isPrimary: true,
                    // 아래 내용이 있어야 AUTO_INCREMENT 가능
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                }
            ]
        }), true)

        await queryRunner.createIndex('tag', new TableIndex({
            name: 'IDX_TAG_NAME',
            columnNames: ['name']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropIndex("tag", "IDX_TAG_NAME");
        await queryRunner.dropTable('tag', true)
    }

}
