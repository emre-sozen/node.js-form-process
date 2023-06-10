import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
    res.send('/users page here')
})

router.get('/:slug', (req, res) => {
    res.send(`${req.params.slug} - profile`)
})

export default router