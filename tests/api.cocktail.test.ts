import { test, expect } from '@playwright/test';

var cocktail = "margarita"

test('Margarita API', async ({ request }, testInfo) => {
  testInfo.annotations.push({
    type: 'TestCase',
    // description: 'TC-45188', // KIWI
    description: 'TC1',         // Github's TESTQUALITY
  });
  const response = await request.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  );

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  expect(body.drinks).toBeTruthy();
  expect(`${cocktail}`.localeCompare(body.drinks[0].strDrink, 
    undefined, { sensitivity: 'accent' }) === 0);
});