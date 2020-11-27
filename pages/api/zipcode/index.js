import nc from "next-connect";
import votesByZipcode from "../../../src/data/votesByZipcode";
import cors from "cors";
import { lookup } from "zipcodes";

const getAllVotes = nc()
  .use(cors())
  .get((req, res) => {
    // retrieves list of all votes
    res.statusCode = 200;
    res.end(JSON.stringify(votesByZipcode));
  })
  .post((req, res) => {
    // put zipcode data into a database

    // get values from request
    const { zipcode, count } = req.body;

    // validate zipcode
    if (!lookup(zipcode)) {
      res.statusCode = 500;
      res.end("This is not a valid zipcode");
      return;
    }

    // will override the previous entry
    votesByZipcode[zipcode] = parseInt(count);
    res.statusCode = 201;
    res.end(JSON.stringify({ message: "Your entry was saved." }));
  });

export default getAllVotes;
