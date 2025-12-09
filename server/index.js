import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

//so that data is accepted in json
app.use(express.json());
app.use(cors())

app.get("/api/message", (req, res) => {res.json({ message: "Hello from Vansh's server!" })});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});