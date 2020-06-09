const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const {check, validationResult} = require('express-validator')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//  @route    GET api/auth

router.get('/',auth, async(req,res)=>{
    // Get user Data from DB
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.error(err.massage)
        res.status(500).send('Server Error')
    }
})


//  @route    POST api/auth


router.post(
    '/',
    [
    check('email','Email is required')
    .isEmail(),
    check('password','Password is required')
    .exists()
    ],
    async (req,res)=> {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const { email, password} = req.body
    
        try {
    
        // see if User exist
            let user = await User.findOne({email})
    
            if(!user){
                return res.status(400).json({errors:[{message:'Invalid Credentials'}]})
            }   


        // Match the password and the Email
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(400).json({errors:[{msg:'Invalid Credentials'}]})
            }
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