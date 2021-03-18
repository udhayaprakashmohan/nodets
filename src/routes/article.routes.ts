const  express =  require("express");
const articleController = require("../controllers/article.controller");
const router = express.Router();


router.get('/get', articleController.all);
router.post('/create', articleController.create);
router.put('/update', articleController.update);
router.delete('/delete', articleController.remove);




export { router as articleRouter }