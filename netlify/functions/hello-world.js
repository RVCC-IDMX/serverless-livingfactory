/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-import-module-exports */
import chalk from 'chalk';
import fetch from 'node-fetch';

const { DateTime } = require('luxon');

exports.handler = async function () {
  const date = DateTime.now();
  console.log(chalk.blue(`${date}: Hello from my Netlify Functions!`));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};
