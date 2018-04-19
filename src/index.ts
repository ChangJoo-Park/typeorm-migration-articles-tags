import "reflect-metadata";
import {createConnection, ConnectionManager} from "typeorm";
import { Article } from "./entity/Article";
import { connect } from "tls";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const newArticle = new Article();
    newArticle.body = 'My First Article Body'
    newArticle.title = 'My First Article Title'
    try {
        const savedArticle = await connection.manager.save(newArticle);
        console.log(savedArticle)
    } catch (error) {
        console.log(error)
    }
    const articles = await connection.manager.find(Article);
    console.log(articles)

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
