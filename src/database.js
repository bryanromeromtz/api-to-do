const mongoose = require('mongoose');


const URI = process.env.MONGOOSE_URI;


mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database is connected');
});


