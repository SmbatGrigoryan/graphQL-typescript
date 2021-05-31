// import { Request, Response } from "express";
// import { Redis } from "ioredis";
// import { createUserLoader } from "./utils/createUserLoader";
// import { createUpdootLoader } from "./utils/createUpdootLoader";
import {Connection, EntityManager, IDatabaseDriver} from "@mikro-orm/core";

// export type MyContext = {
//   req: Request & { session: Express.Session };
//   redis: Redis;
//   res: Response;
//   userLoader: ReturnType<typeof createUserLoader>;
//   updootLoader: ReturnType<typeof createUpdootLoader>;
// };


export type MyContext = {
  em: EntityManager <any> & EntityManager<IDatabaseDriver<Connection>>


}
