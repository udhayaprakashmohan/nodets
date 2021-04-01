import app from '../server';
import request from 'supertest';


let postId = ''
let token = ''
describe('Test ArticleController', () => {
  it('tests the POST method and returns true for status /article ', async () => {
    const result: any = await request(app)
      .post('/article')
      .send({
        "firstName": "sample",
        "lastName": "sample",
        "id": 4,
        "title": "article",
        "description": "article here"
      });
    postId = result.body.article._id
    token = result.body.token
    expect(result.status).toBe(200);

  });
  it('tests the POST method and returns false for status /article ', async () => {
    const result: any = await request(app)
      .post('/article')
      .send({
        "lastName": "sdsd",
        "id": 4,
        "title": "article",
        "description": "article here"
      });
    expect(result.status).toBe(500);

  });
});

describe('Test ArticleController', () => {
  it('tests the GET all method and returns true foe status /article ', async () => {
    const result: any = await request(app)
      .get('/article/').set("auth", token)
    expect(result.status).toBe(200);

  });
  it('tests the GET all method if token is not correct  /article ', async () => {
    const result: any = await request(app)
      .get('/article/').set("auth", "ertyhfjkf")
    expect(result.status).toBe(500);

  });

});
describe('Test ArticleController', () => {
  it('tests the GET by id  and returns true for status /article ', async () => {
    const result: any = await request(app)
      .get('/article/' + postId).set("auth", token)
    expect(result.status).toBe(200);

  });
  it('tests the GET by id ,if token is not correct  /article ', async () => {
    const result: any = await request(app)
      .get('/article/' + postId).set("auth", "rtgedrfuwerwthuhtu")
    expect(result.status).toBe(500);

  });
})

describe('Test ArticleController', () => {
  it('tests the PUT method and returns true for status  /article ', async () => {
    const result: any = await request(app)
      .put('/article/' + postId).set("auth", token)
      .send({
        "firstName": "test",
        "lastName": "test",
        "id": 4,
        "title": "article",
        "description": "article here"
      });
    expect(result.status).toBe(200);
  });

  it('tests the PUT method if token is not correct  /article ', async () => {
    const result: any = await request(app)
      .put('/article/' + postId).set("auth", "rtgedrfuxxwerwthuhtu")
    expect(result.status).toBe(500);
  });
});

describe('Test ArticleController', () => {
  it('tests the DELETE method and returns true for status  /article ', async () => {
    const result: any = await request(app)
      .delete('/article/' + postId).set("auth", token)
    expect(result.status).toBe(200);

  });

  it('tests the DELETE method and if token is not correct   /article ', async () => {
    const result: any = await request(app)
      .delete('/article/' + postId).set("auth", 'udhfjhfsd')
    expect(result.status).toBe(500);

  });

});