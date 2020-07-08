const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const config = require('config')
const normalize = require('normalize-url');

//   POST /users

router.post(
'/',
[
check('name','Name is required')
.not()
.isEmpty(),
check('gender','gender is required')
.not()
.isEmpty(),
check('email','Email is required')
.isEmail(),
check('password','Password is required')
.isLength({min:6})
],
async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { name, email, password, gender} = req.body

    try {


    // see if User exist
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({errors:[{message:'User is already exist'}]})
        }   


    // Get users avatart
        const avatar = normalize(
            gravatar.url(email,{
            s:'200',
            r: 'pg',
            d: 'mm'
            }),
            { forceHttps: true }
        );

        user = new User({
            name,
            email,
            password,
            avatar,
            gender
        })

    // Encrypt password
    const  salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    await user.save()


    // Return jsonwebtoken
        const payload ={
            user:{
                id: user.id
            }
        }
        
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err, token)=>{
                if(err) throw err
                res.json({token})
            }
            )

    } catch (err) {
        console.log(err.message);
        res.status(500).send('server Errore')
    }
})

module.exports = router