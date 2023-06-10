import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        heading: 'Contact Page'
    })
})

router.post('/', (req, res) => {
    const { name } = req.body;
    res.render('contact', {
        heading: `I got your message ${name}`
    })
})

export default router