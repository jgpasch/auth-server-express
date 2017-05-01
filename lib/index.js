import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

// initialize app
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

mongoose.connect('mongodb://localhost/auth-server-express');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('error connecting to mongo');
})

// initalize routes
import InitRoutes from './routes';
InitRoutes(app);

const port = 8000;


app.get('*', (req,res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});