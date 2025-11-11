import express from 'express';
import cors from 'cors';
import jwtauth from "./routes/jwtAuth.js";
import dashboard from "./routes/dashboard.js";


const app = express();
app.use(express.json());
app.use(cors());


app.use("/auth", jwtauth);

app.use("/dashboard", dashboard);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});