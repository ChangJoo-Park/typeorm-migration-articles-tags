import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn } from 'typeorm';

export class articleCreate1524147878209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'article',
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
            name: 'IDX_ARTICLE_TITLE',
            columnNames: ['title']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('article', true)
    }

}
