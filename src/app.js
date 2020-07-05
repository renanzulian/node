import Express, { json, urlencoded } from 'express';
import Cors from 'cors';
import Morgan from 'morgan';
import nodeRoutes from './routes/node.routes';
import './database/mongodb';

class Application {
  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(json());
    this.server.use(urlencoded({ extended: false }));
    this.server.use(Cors());
    this.server.use(Morgan('dev'));
  }

  routes() {
    this.server.use('/nodes', nodeRoutes);

    this.server.use('*', (req, res) => {
      return res.status(404).send({ error: 'Not found' });
    });
  }
}

export default new Application().server;
