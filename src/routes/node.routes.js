import { Router } from 'express';
import NodeController from '../controllers/node.controller';

class NodeRoutes {
  constructor() {
    this.router = Router();
    this.controller = new NodeController();
    this.routes();
  }

  routes() {
    this.router.get('/', (req, res) => {
      this.controller
        .getAllNodes()
        .then((results) => {
          res.status(200).send({ nodes: results });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    });

    this.router.get('/:nodeName', (req, res) => {
      this.controller
        .findNodes(req.params.nodeName)
        .then((result) => {
          res.status(200).send({ result });
        })
        .catch((error) => {
          res.status(404).send({ error: error.message });
        });
    });

    this.router.post('/', (req, res) => {
      this.controller
        .addNode(req.body.name)
        .then((result) => {
          console.log(result);
          res.status(201).send({
            message: 'Node added',
            node: result,
          });
        })
        .catch((error) => {
          res.status(500).send({ message: error });
        });
    });

    this.router.post('/relationship/:nodeName', (req, res) => {
      this.controller
        .addRelashionShips(req.params.nodeName, req.body.name)
        .then((results) => {
          res.status(200).send({ relationship: results });
        })
        .catch((error) => {
          res.status(400).send({ message: error.message });
        });
    });
  }
}

export default new NodeRoutes().router;
