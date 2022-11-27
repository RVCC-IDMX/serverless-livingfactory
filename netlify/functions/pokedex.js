/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-import-module-exports */
import chalk from 'chalk';
import fetch from 'node-fetch';

const { DateTime } = require('luxon');

// eslint-disable-next-line no-unused-vars, func-names
exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body);
  const date = DateTime.now();
  const color = eventBody.region === 'kanto' ? chalk.blue : chalk.green;

  console.log(color(`${date}: Fetching data from PokeAPI!`));
  console.log(color(`\teventBody.region: ${eventBody.region}`));

  // eslint-disable-next-line prefer-template
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region;

  const response = await fetch(POKE_API);
  const data = await response.json();
  console.log(color(`\tNumber of entires: ${data.pokemon_entries.length}`));

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
