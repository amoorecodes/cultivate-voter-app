import nc from 'next-connect'
import cors from 'cors'

const zipcodeHandler = nc() 
  .use(cors())
  .get((req,res) => {
    // get results for zipcodes
    res.statusCode = 200
    res.end(JSON.stringify({zipcode: req.query.zipcode}))
  })
  .post((req, res) => {
    // put zipcode data into a database
    res.statusCode = 201;
    res.end(JSON.stringify({'message': 'Your entry was saved.'}))
  })
  .put((req, res) => {
    // technically would be used to update zipcode if more data has been entered

    // dissabled for now
    res.statusCode = 404;
    res.end('Method not supported. You cannot modify entries.')
  })
  .delete((req, res) => {
    // would delete zipcode data 
    // dissabled for the sake of this exercise
    res.statusCode = 404; 
    res.end('Method not supported. You cannot delete entries.')
  })