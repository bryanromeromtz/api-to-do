const mongoose = require('mongoose');


const URI = process.env.MONGOOSE_URI || 'mongodb://localhost/merndatabase';


mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('Connected to mongoDB Atlas'))
  .catch((error) => console.error(error))


const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database is connected');
});


