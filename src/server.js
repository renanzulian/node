import app from './app';
import http from 'http';

const server = http.createServer(app);
server.listen(process.env.NODE_PORT || 3333);
