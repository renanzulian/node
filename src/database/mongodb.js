import mongoose from 'mongoose';

class MongoDb {
  constructor() {
    this.url = process.env.MONGO_URI || 'mongodb://localhost:27017/nodeProject';
    this.connection = mongoose
      .connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => 'Mongo has been connected')
      .catch((error) => console.error(error.messsage));
  }
}

export default new MongoDb().connection;
