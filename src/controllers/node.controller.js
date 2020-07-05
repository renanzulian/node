import Node from '../modules/node.model';

class NodeController {
  async addNode(name) {
    const newNode = new Node({
      nodeName: name,
    });

    const nodeAdded = await newNode.save();
    return nodeAdded;
  }

  async getAllNodes() {
    const nodes = await Node.find({}).exec();
    return this.multNodesFormatter(nodes);
  }

  multNodesFormatter(nodes) {
    return nodes.map((node) => {
      const relationship = node.neighbors.map((relationship) => ({
        [relationship.nodeName]: relationship.value,
      }));
      return {
        [node.nodeName]: relationship,
      };
    });
  }

  async findNodes(firstNode, secoundNode) {
    if (secoundNode) {
      const nodes = await Node.find({
        nodeName: { $in: [firstNode, secoundNode] },
      });
      if ((nodes.length = 2)) {
        return nodes;
      } else {
        throw new Error('Node has not founded ');
      }
    } else {
      const node = await Node.findOne({ nodeName: firstNode });
      if (node) {
        return node;
      } else {
        throw new Error('Node has not founded ');
      }
    }
  }

  async addRelashionShips(firstNode, secoundNode) {
    const [nodeA, nodeB] = await this.findNodes(firstNode, secoundNode);
    nodeA.neighbors.push({ nodeName: nodeB.nodeName, value: 10 });
    nodeB.neighbors.push({ nodeName: nodeA.nodeName, value: 10 });

    await nodeA.save();
    await nodeB.save();
    return [nodeA, nodeB];
  }
}

export default NodeController;
