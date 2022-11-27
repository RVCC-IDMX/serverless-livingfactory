// eslint-disable-next-line import/no-extraneous-dependencies, import/no-import-module-exports
import fetch from 'node-fetch';

// eslint-disable-next-line no-unused-vars, func-names
exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body);
  // eslint-disable-next-line prefer-template
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region;

  const response = await fetch(POKE_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
