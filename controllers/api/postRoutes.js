const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
// const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res)=>{
    try{
        const newPost = await Post.create({...req.body, user_id: req.session.userId})

        res.json(newPost)

    }catch(err){
        console.log(err);
        res.json(err)
    }
})

router.put('/:id', withAuth, async (req, res) => {
    try {
        const newPost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
            
        })
        res.json(newPost)
    } catch(err) {
        console.log(err);
        res.json(err)
        ;}
    })

router.delete('/:id', withAuth, async (req, res)=> {
    try {
        const post = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(post);

    }catch(err) {
        console.log(err);
        res.json(err);
    }
})

module.exports = router;