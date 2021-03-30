import * as jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from 'express';


export class ArticleJwt {
   constructor() {
   }

   async jwts(): Promise<String> {
      const token = await jwt.sign({ firstName: "articles" }, `${process.env.SECRET_KEY}`);
      return token;
   }

   async authenticateToken(req: Request, res: Response, next: NextFunction): Promise<any> {
      const token: any = req.headers['auth'];
      if (!token)
         res.status(401).send({ auth: false, message: 'No token provided.' });

      return jwt.verify(token, `${process.env.SECRET_KEY}`, (err: any, decoded: any) => {
         if (err) {
            res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
         }
         else {
            next();
         }
      });

   }
}
