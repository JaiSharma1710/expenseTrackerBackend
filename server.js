const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

const app = require('./app');

const DB = process.env.DB_STRING.replace('<password>', process.env.DB_PASSWORD);

mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection was successful'));

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`),
);
