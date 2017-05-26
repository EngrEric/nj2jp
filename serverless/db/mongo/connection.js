/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';
import createProductModel from './models/product';
import createUserModel from './models/user';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const {
  SLS_ENV,
  LAMBDA_MONGO_DEV_URI,
  LAMBDA_MONGO_PROD_URI,
} = process.env;
const MONGO_DB = SLS_ENV === 'production' ? LAMBDA_MONGO_PROD_URI : LAMBDA_MONGO_DEV_URI;

const mongooseConnection = () =>
new Promise((resolve) => {
  const newDB = mongoose.createConnection(MONGO_DB, console.log);
  resolve(newDB);
});

export const closeDB = (db, GraphQLResponse) =>
new Promise((resolve) => {
  db.close(() => {
    console.log('\n//mongo/connection.js @ CLOSE DB');
    console.log('\n//mongo/connection.js \ndb.connections AFTER close: ', db.base.connections);
    resolve(GraphQLResponse);
  });
});

export const startDB = () =>
new Promise((resolve) => {
  mongooseConnection()
  .then((newDB) => {
    console.log(`\nMongo Connected @ ${MONGO_DB}`);
    console.log('\nNew DB = ', newDB);
    resolve({
      db: newDB,
      dbModels: {
        Product: createProductModel(newDB),
        User: createUserModel(newDB),
      },
    });
  })
  .catch(error =>
    console.log(`\nCould not connect to Mongo DB.\nERROR: ${error}`),
  );
});
