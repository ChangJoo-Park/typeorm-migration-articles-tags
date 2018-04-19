import "reflect-metadata";
import {createConnection, ConnectionManager} from "typeorm";
import { Article } from "./entity/Article";
import { connect } from "tls";

createConnection().then(async connection => {

    const newArticle = new Article();
    newArticle.body = 'My First Article Body'
    newArticle.title = 'My First Article Title'

    try {
        await connection.getRepository(Article).save(newArticle)
    } catch (error) {
        console.log(error)
    }

    const articles = await connection.manager.find(Article);
    console.log(articles)

}).catch(error => console.log(error));
