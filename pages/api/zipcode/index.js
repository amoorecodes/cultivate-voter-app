import nc from 'next-connect'
import votesByZipcode from '../../../src/data/votesByZipcode'
const getAllVotes = nc()
  .get((req,res) => {
    // retrieves list of all votes
    res.statusCode = 200;
    res.end(JSON.stringify(votesByZipcode))
  })
  .post((req, res) => {
    // put zipcode data into a database

    const {zipcode, votes} = req.body
    // will override the previous entry
    votesByZipcode[zipcode] = votes;
    res.statusCode = 201;
    res.end(JSON.stringify({'message': 'Your entry was saved.'}))
  })

  export default getAllVotes;