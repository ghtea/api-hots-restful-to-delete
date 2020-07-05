module.exports = function(app, Book)
{

app.get('/books', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

 /*
app.post('/books', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
*/

app.post('/books', function(req, res){
    let book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;
    //book.published_date = new Date(req.body.published_date);

    book.save(function(err){
    	
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});



 
app.put('/books/:idBook', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.idBook} resource`,
  );
});
 
app.delete('/books/:idBook', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.idBook} resource`,
  );
});

	
}