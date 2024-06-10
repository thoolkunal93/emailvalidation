
import  express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
