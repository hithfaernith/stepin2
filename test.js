const express = require("express");
const mysql = require("mysql");
const test = express();
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql12345,.',
    database : 'game_platform'
})

db.connect((err) => {
    if(err){
        throw err;
    };
    console.log('MySQL connected...')
});

// test.get('/create-comment-table', (req, res) => {
//     let sql = 'CREATE TABLE comments(id int AUTO_INCREMENT, name VARCHAR(255), comment VARCHAR(255), evaluation VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Posts table created...')
//     })
// })

// test.get('/add-comment-1', (req, res) => {
//     let comment = {name:'Siqi', comment:'Game is so funny', evaluation:'Excellent'}
//     let sql = 'INSERT INTO comments SET ?';
//     let query = db.query(sql, comment, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Comment1 one added...')
//     });
// })

// var comments;
// test.get('/get-comment/:id', (req, res) => {
//     let sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         comments = result[0]["id"];
//         console.log(comments);
//         res.send('comment fetched...');
//     });
// })

var comments;
test.get('/', (req, res) => {
    let sql = 'SELECT * FROM comments';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        comments = result[0]["id"];
        console.log(comments);
        res.send('comment fetched...');
    });
})


test.listen('3000', () => {
    console.log('Server started on port 3000');
});
