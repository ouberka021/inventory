//dotenv packege installed
require('dotenv').config();
//expres installed
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
// login 
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
app.use(cors());
// end login
const mongoose = require('mongoose'); // Require Mongooose installed
const Product = require('./models/product.js'); //Require product DB
const Category = require('./models/category.js'); //Require category DB
const User = require('./models/user.js'); //Require user DB
const methodOverride = require('method-override') //Add method override installed
const productData = require('./utilities/productData')
// for css file public
app.use(express.static('public'));
//DB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});
//Middleware
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
});
app.use(methodOverride('_method')) //Sets up methodoverride for use
//Setting up views
app.set('view engine', 'ejs');
app.set('view engine', "jsx");
//express-react-views installed
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));

// Items into data
app.get('/product/seed', (req, res) => {
    Product.create(productData)
    res.redirect('/product')
});
app.get('/register/seed', (req, res) => {
    User.create(userData)
    res.redirect('/login')
});
// category data
app.get('/category/seed', (req, res) => {
    Category.create(categoryData)
    res.redirect('/category')
});
//Users data
app.get('/user/seed', (req, res) => {
    User.create(userData)
    res.redirect('/user')
});

// Home page
app.get('/', (req, res) => {
    Product.find({}, (error, product) => {
        res.render('Home', {
            product: product     
        })
    });
});
//Product list page
app.get('/product', (req, res) => {
    Product.find({}, (error, product) => {
        res.render('Index', {
            product: product     
        })
    })
});

//Create product page
app.get('/product/new', (req, res) => {
    res.render('New');
});

//Create product POST route




app.post('/product/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
       res.redirect('/product');
    //    res.send(createdProduct);
    });
});
//Show route
app.get('/product/:id', (req, res) =>{
    Product.findById(req.params.id, (err,foundProduct) =>{
        res.render("Show", {
            product: foundProduct
        }); 
    });  
});
// //Delete Route
app.delete('/product/:id', (req, res) => {
    //First arg is ID we want to delet, 2nd arg is callback function
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/product')
    });
});
// Render Edit Page
app.get('/product/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) =>{
        if(!err){
            res.render('Edit', {
                product: foundProduct
        })} else {
            res.send({
                msg: err.message
            }); }})});
//Put new information in DB
app.put('/product/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, product) => {
        res.redirect(`/product/${req.params.id}`)
    })
});
// category collection
// list of category
app.get('/category', (req, res) => {
    Category.find({}, (error, category) => {
        res.render('Category-index', {
            category: category     
        })
    })
});
//Create new category 
app.get('/category/new', (req, res) => {
    res.render('New-categ');
});

//Create category POST route
app.post('/category/', (req, res) => {
    Category.create(req.body, (error, createdCategory) => {
       res.redirect('/category');
    });
});
// //Delete Route
app.delete('/category/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/category')
    });
});
// Render Edit Page
app.get('/category/:id/edit', (req, res) => {
    Category.findById(req.params.id, (err, foundCategory) =>{
        if(!err){
            res.render('Edit-categ', {
                category: foundCategory
        })} else {
            res.send({
                msg: err.message
            }); }})});
//---- end category side ------
// User collection
// list of users
// app.get('/user', (req, res) => {
//     User.find({}, (error, user) => {
//         res.render('User-home', {
//             user: user     
//         })
//     })
// });
// //Create new category 
// app.get('/user/new', (req, res) => {
//     res.render('New-user');
// });

// //Create category POST route
// app.post('/user/', (req, res) => {
//     User.create(req.body, (error, createdUser) => {
//        res.redirect('/user');
//     });
// });
// // //Delete Route
// app.delete('/user/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id, (err, data) => {
//         res.redirect('/user')
//     });
// });
// // Render Edit Page
// app.get('/user/:id/edit', (req, res) => {
//     User.findById(req.params.id, (err, foundUser) =>{
//         if(!err){
//             res.render('Edit-user', {
//                 user: foundUser
//         })} else {
//             res.send({
//                 msg: err.message
//             }); }})});
//---- end category side ------




// app.get('/login', (req, res) => {
//     res.render("Login");
// });
  
// app.get('/register', (req, res) => {
//     res.render("Register");
// });
// // new registration page
// app.post('/register', (req, res) => {
 
// //     const newUser = new User({
// //         firstname: req.body.firstname,
// //         lastname: req.body.lastname,
// //         email: req.body.username,
// //         password: req.body.password
// //     });
// //     newUser.save((error) => {
// //         if (error) {
// //             console.log(error)
// //         } else {
// //             console.log("registred")
// // res.render("home");
// //         }})
// });
// // end script ....
// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
// User.findOne({email: username}, (err, foundUser) => {
// if (err) {
//     console.log(err)
// } else {
//     if (foundUser) {
//         if ( foundUser.password === password) {
//             res.render("home")
//         }
//     }
// }
// })
// });
// //
// port running success
app.listen(port, () => {
    console.log("the server is running on port: " + port)
});