const router= require('express').Router()
router.route('/')
      .get((req, res)=>{
          res.send({
              "string1": "String1"
              "string2": "String"
          })
      })


mosule.exports=router