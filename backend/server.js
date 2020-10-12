import express from 'express';
import bodyparser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'moviedatabase',
    port: "3306"

});
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());

app.use(bodyparser.urlencoded({extended:true}));
 

app.get('/api/get',(req,res)=>{
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    })
})
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});
app.post('/api/insert',(req,res)=>{ 
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const movieRating = req.body.movieRating;
    console.log("Connected!");
    const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review, movie_rating) VALUES (?,?,?)"
    db.query(sqlInsert, [movieName, movieReview, movieRating], (err,result)=>{
        console.log(result);    
     })  
})
app.delete('/api/delete/:movieName', function(req, res) {
    const name = req.params.movieName;
    db.query("DELETE FROM movie_reviews WHERE movie_name = ?", name,
        (err,result) => {
            if(err) console.log(err);
        }
        );
});

app.put('/api/update', function(req, res) {
    const name = req.body.movieName;
    const review = req.body.movieReview;
    db.query("UPDATE movie_reviews SET movie_review = ? WHERE movie_name = ?", [review, name],
        (err,result) => {
            if(err) console.log(err);
        }
        );
});
app.delete('')
app.listen(port, () => {
    console.log("running on port 5000");
})