const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Blog = require("./models/blog");
mongoose.connect("mongodb+srv://blog_management_tool:blog_management_tool@cluster0.oyzawjb.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
})
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.redirect("/home_page")
})
app.get('/about_us', (req, res) => {
    const aboutContent = "Welcome to our blog's about page! We are a passionate team...";
    const teamMembers = [
        { name: 'Amarnadh Karpurapu', role: 'Founder' },
        { name: 'Amarnadh Karpurapu', role: 'Blogger' },
        // Add more team members here
    ];

    res.render('about_us', { aboutContent, teamMembers });
});  
app.get('/contact_us', (req, res) => {
    res.render('contact_us'); // Render the contact_us.ejs template for initial view
});

app.post('/contact_us', (req, res) => {
    const { name } = req.body;
    
    // Handle form data and other actions here
    
    // Set up confirmationMessage
    const confirmationMessage = `Thank you, ${name}! Your message has been received.`;

    // Render the contact_us.ejs template with confirmationMessage
    res.render('contact_us', { confirmationMessage });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({ extended: true }));
const port = 3000;
app.get("/show-blogs",async (req, res) => {
    const allBlogs = await Blog.find({});
    console.log(allBlogs)
    res.render('Show_blogs',{allBlogs})
})
app.get('/home_page', (req, res) => {
    res.render("Home_page");
})
app.post('/home_page', async(req, res) => {
    console.log(req.body);
    const { fname, lname, email, title, image1,image2,image3,image4, content } = req.body;

    const isdatastored=await Blog.create({ name: fname + " " + lname, email: email, photo: [image1,image2,image3,image4], text: content, title: title });
    if (!isdatastored) {
        console.log('Err');
    }
    console.log('Data stored Success');
    res.redirect("/show-blogs")
})
app.get("/read-blog/:id",async(req, res) => {
    const { id } = req.params;
    const item = await Blog.findById(id);
    console.log(item);
    res.render('read_blogs',{item})
})
app.post("/delete-blog/:id",async (req, res) => {
    const { id } = req.params;
    const deleteitem=await Blog.findByIdAndDelete(id);
    if (!deleteitem) {
        console.log('Item not deleted');
    }
    console.log('Item deleted');
    res.redirect("/show-blogs")
})
app.listen(port, () => { console.log('Server is running at port 3000') });