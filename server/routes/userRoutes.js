const createUser=require('../controller/createUser')
const updateUser=require('../controller/updateUser')
const deleteUser=require('../controller/deleteUser')
const getUser=require('../controller/getUser')
const registerUser=require('../controller/registerUser')
const loginUser=require('../controller/loginUser')
const authRequired=require('../middlewares/authRequired')

const express=require('express')

const router = express.Router();


router.post('/register',registerUser)
router.post('/login',loginUser)

router.use(authRequired)
    
router.post('/addUser',createUser);
router.get('/getUser',getUser);
router.post('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);



module.exports=router;
