const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist');

var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const trySchema = new mongoose.Schema({
    name: String
});

const item = mongoose.model('task', trySchema);
const item1 = new item({
    name: "create a new task"
});
const item2 = new item({
    name: "Learn a react"
});
const item3 = new item({
    name: "Learn a nodejs"
});

const item4 = new item({
    name: "take a rest"
});

// item2.save();
// item3.save();
// item4.save();

// var items = [];
// var example = "This is a variable";
app.get('/', function(req, res){
    item.find({})
    .then(foundItems => {
        res.render('list', { dayej: foundItems });
    })
    .catch(err => {
        console.log(err);
    });

});

app.post('/', function(req, res){
    const itemName = req.body.todo;
    const todo1 = new item({
        name: itemName
    });
    todo1.save();
    res.redirect('/');
});

app.post('/delete', async function(req, res){
        const checkedItem = req.body.checkbox1;
        try {
            const result = await item.findByIdAndDelete(checkedItem);
            console.log('Successfully deleted');
            res.redirect('/');
        } catch (err) {
            console.error(err);
            // Handle error
        }
    
});


app.listen(3000, function(){
    console.log('Server started');
});