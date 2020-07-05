import { Schema, model } from 'mongoose';

const node = new Schema({
  nodeName: { type: String, required: true, unique: true },
  neighbors: [
    {
      nodeName: String,
      value: Number,
    },
  ],
});

export default model('Nodes', node, 'nodes');
