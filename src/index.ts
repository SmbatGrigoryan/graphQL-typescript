import "reflect-metadata"
import { MikroORM } from "@mikro-orm/core";
import express from "express";
import  { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import  { Post } from "./entities/Post"

import microConfigs from "./mikro-orm.config";
import {Hello} from "./resolvers/hello";
import {PostResolver} from "./resolvers/post";



const main = async () => {
    const orm = await MikroORM.init(microConfigs);
    await orm.getMigrator().up()
    // const post = await orm.em.create(Post, {"title": "some title",
    //     "id": 81,
    //     text: "555555"});
    // await orm.em.persistAndFlush(post)
    const all = await orm.em.find(Post, {})

    console.log('all >>>', all)
    console.log('all >>>', all)

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                Hello,
                PostResolver
            ],
            validate: false,
        }),
        context: () => {
            return {
                em: orm.em
            }
        }
    });

    apolloServer.applyMiddleware({
        app: app
    })



    app.listen(4000, () => {
        console.log(`app is listening`)
    })

}

main().catch(e => console.error(e));

const app = express();

// app.get('/', (_req, res) => {
//     res.send(`hello`)
// })











console.log("hello world")
console.log("hello world")
