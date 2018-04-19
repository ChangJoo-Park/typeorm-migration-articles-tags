import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class articleCreate1524147878209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'articles',
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

        await queryRunner.createIndex('articles', new TableIndex({
            name: 'IDX_ARTICLE_NAME',
            columnNames: ['name']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('articles', true)
    }

}
