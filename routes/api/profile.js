const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const {check, validationResult}= require('express-validator')
const Profile = require('../../models/Profile')
const User = require('../../models/User')

//GET api/profile

router.get('/me', auth, async(req,res)=> {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate('user',['name','avatar','gender'])

        if(!profile){
            return res.status(400).json({msg: 'there is no Profile for this user'})

        }

        res.json(profile)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

})

//POST api/profile


router.post('/',[
    auth,
    [
        check('status','Status is required').not().isEmpty(),
        check('skills', 'Shills are required').not().isEmpty()
    ],
    async (req,res)=>{

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        
        // profile object
        const {
            company,
            location,
            website,
            bio,
            skills,
            status,
            githubusername,
            xing,
            twitter,
            instagram,
            facebook
        } = req.body;

        const profileFields = {}

        profileFields.user= req.user.id
        if(company){
            profileFields.company = company
        }
        if(website){
            profileFields.website = website
        }
        if(location){
            profileFields.location = location
        }
        if(bio){
            profileFields.bio = bio
        }
        if(status){
            profileFields.status = status
        }
        if(githubusername){
            profileFields.githubusername = githubusername
        }
        if(skills){
            profileFields.skills = skills.split(',').map(skill => skill.trim() )
        }


        profileFields.social= {}

        if(facebook){
            profileFields.social.facebook = facebook 
        }
        if(instagram){
            profileFields.social.instagram = instagram
        }
        if(twitter){
            profileFields.social.twitter =  twitter 
        }
        if(xing){
            profileFields.social.xing =  xing 
        }


        try {
            let profile = await Profile.findOne({user: req.user.id})

            if(profile){
                profile= await Profile.findOneAndUpdate(
                    {user: req.user.id},
                    {$set:profileFields},
                    {new: true}
                )
                return res.json(profile)

            }else{
                profile= new Profile(profileFields)
                profile.save()
                res.json(profile)

            }


        } catch (err) {
            console.error(err.message)
            res.status(500).send('server error')
        }
    }
]
)



// Get all DDC Profiles

router.get('/', async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', ['name', 'avatar', 'gender']);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// Get  DDC user Profiles by ID

router.get('/user/:user_id', async(req,res)=>{
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name','avater','gender'])

        if(!profile){
            return res.status.json('there is no User')
        }
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})

// delete  Profile & user

router.delete('/',auth, async(req,res)=>{
    try {
        await Profile.findOneAndRemove({user:req.user.id})
        await User.findOneAndRemove({_id:req.user.id})
        res.json(`User  has been deleted`)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})


module.exports = router