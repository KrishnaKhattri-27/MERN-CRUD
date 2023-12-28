const createUser=require('../controller/createUser')
const updateUser=require('../controller/updateUser')
const deleteUser=require('../controller/deleteUser')
const getUser=require('../controller/getUser')

const express=require('express')
const router = express.Router();

router.post('/addUser',createUser);
router.get('/getUser',getUser);
router.post('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

module.exports=router;
