import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";

// routes
import users from "./routes/users.js";
import contact from "./routes/contact.js";

const __dirname = path.resolve(); 

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs")
app.set('layout', "layouts/layout")
app.use(expressLayouts)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Website Title',
        heading: 'Welcome To Website'
    })
})

app.use('/users', users)
app.use('/contact', contact)

app.listen(port, () => {
    console.log(`App listen at ${port} port...`);
})