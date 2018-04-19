import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class articleCreate1524147878209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'article',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'body',
                    type: 'varchar',
                }
            ]
        }), true)

        await queryRunner.createIndex('article', new TableIndex({
            name: 'IDX_ARTICLE_NAME',
            columnNames: ['title']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('article', true)
    }

}
