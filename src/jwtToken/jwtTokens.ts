import * as jwt from "jsonwebtoken"


export class ArticleJwt {
   constructor() {
   }

   async jwts(): Promise<String> {
      const token = await jwt.sign({ firstName: "articles" }, 'webtoken');
      return token;
   }

   async verifyToken(req: any): Promise<any> {
      const token = req.headers['auth'];
      if (!token)
         return { auth: false, message: 'No token provided.', status: 401 };

      return jwt.verify(token, 'webtoken', (err: any, decoded: any) => {
         if (err) {
            return { auth: false, message: 'Failed to authenticate token.', status: 500 };
         }
         return { auth: true, decoded: decoded, status: 200 };
      });
   }
}
