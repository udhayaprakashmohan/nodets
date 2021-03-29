import * as jwt from "jsonwebtoken"
import { Request, Response,NextFunction } from 'express';


export class ArticleJwt {
   constructor() {
   }

   async jwts(): Promise<String> {
      const token = await jwt.sign({ firstName: "articles" }, 'webtoken');
      return token;
   }

   async authenticateToken(req: Request, res: Response, next: NextFunction): Promise<any> {
      const token:any = req.headers['auth'];
      if (!token)
           res.status(401).send({ auth:false,message: 'No token provided.' });

      return jwt.verify( token,'webtoken', (err: any, decoded: any) => {
         if (err) {
           res.status(500).send ({ auth: false, message: 'Failed to authenticate token.' });
         }
         else
          res.status(200).send({ auth: true, decoded: decoded });
         next();
      });
   
   }
}
