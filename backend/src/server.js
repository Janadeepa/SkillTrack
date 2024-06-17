const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
