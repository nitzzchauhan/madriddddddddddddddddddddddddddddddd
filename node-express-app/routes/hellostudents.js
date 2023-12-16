const express = require('express')

const router = express.Router()

router.get('/hellostudents',(req,res)=>{
    res.render('hello')
})
router.get('/madridclasses',(req,res)=>{
    res.send('hello madrid')
})


module.exports = router

