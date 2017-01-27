import express from 'express';

const app = express();

app.get('*', (req,res) => {
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log('app listening on port 8000');
});