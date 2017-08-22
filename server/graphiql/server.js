/* eslint-disable no-console */
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import cors from 'cors';
import schema from './db/graphql/schema';
import api from './api/index';

require('dotenv').load({ silent: true });

const PORT = 3001;
const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
server.use('/api', bodyParser.json(), api);
server.listen(PORT, () => console.log(`Server listening @ ${PORT}
Graphiql Server @ http://localhost:${PORT}/graphiql`));
