import {MigrationInterface, QueryRunner, TableForeignKey, TableColumn} from "typeorm";

export class ArticleTagRelation1524179441957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn("tag", new TableColumn({
            name: "articleId",
            type: "int"
        }));

        await queryRunner.createForeignKey('tag', new TableForeignKey({
            columnNames: ['articleId'],
            referencedColumnNames: ["id"],
            referencedTableName: "article",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable("article");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("articleId") !== -1)
        await queryRunner.dropForeignKey("article", foreignKey);
    }

}
