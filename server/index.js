import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

//so that data is accepted in json
app.use(express.json());
app.use(cors(
    // url in this array will be accepted by the server
    { origin:['http://localhost:5174','http://localhost:5173','http://localhost:3000']
        ,credentials:true
     }
))

app.get("/api/message", (req, res) => {res.json({ message: "Hello from Vansh's server!" })});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});