var fs = require('fs');
// var ejs = require('ejs');
var express = require('express');

var app = express();

// var bodyParser = require('body-parser');
// var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
// app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.listen(3000, function(){
	console.log('listening on port 3000!')
}); 

// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('afito.db')


const {Client} = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/afito';

const client = new pg.Client(connectionString);
client.connect();

const config = {
  user: 'dbuser',
  host: 'database.localhost',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
};


const client = new Client(config);




client.connect();






app.get('/users', function (req, res) {
	db.all("SELECT * FROM users;", function(err, rows) {
		if(err) {
			console.log(err);
		}
		else {
  			res.send(rows)
		}
	})
})


app.get('/users/new', function(req, res) {
	var html = fs.readFileSync("./views/usersNew.html", "utf8");
	res.send(html);
})

// app.get('/users/:id', function(req, res) {
// 	var id = req.params.id;
// 	db.get('SELECT * FROM users WHERE user_id = ' +id, function(err, row) {
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			var template = fs.readFileSync("./views/user.html", 'utf8');
// 			var html = ejs.render(template, {user: row});
// 			res.send(html);
// 		}
// 	})
// })


// app.post('/users', function(req, res) {
// // console.log(req);
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	var name = req.body.name;
//     var email = req.body.email;

//     db.run('INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?);', username, password, name, email, function(err) {
//     	if(err) {
//     		console.log(err);
//     	}
//     })

//     res.redirect('/users');
// })


// app.get('/users/:id/edit', function(req, res) {
// 	var id = req.params.id;
//     db.get('SELECT * FROM users WHERE user_id = ' +id, function(err, row) {
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			var template = fs.readFileSync("./views/usersEdit.html", "utf8");
// 			var html = ejs.render(template , {user: row})
// 			res.send(html);
// 		}
// 	})

// })

// app.put('/users/:id' , function(req, res) {
// 	var id = req.params.id;
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	var name = req.body.name;
// 	var email = req.body.email;

// 	db.run("UPDATE users SET username ="+username+", password="+password+", name="+name+", email="+email+" WHERE user_id =" +id, function(err) {
// 		if (err) {
// 			console.log(err);
// 		}
// 	})

// 	res.redirect("/users/"+id);
// })