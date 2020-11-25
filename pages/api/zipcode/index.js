import nc from 'next-connect'
import data from '../../../src/data/votesByZipcode'

const getAllVotes = nc()
  .get((req,res) => {
    res.statusCode = 200;
    res.end(JSON.stringify(data))
  })

  export default getAllVotes;