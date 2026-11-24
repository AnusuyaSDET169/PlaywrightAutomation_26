const { test,expect } = require('@playwright/test');


test('First Testcase ',async({page})=>
    {  

 await page.goto("https://www.google.com/maps");
   console.log(await page.title());
await expect(page).toHaveTitle('Google Maps');
});

test('Second Testcase ',async({page})=>
    {  
       await page.goto("https://playwright.dev/");
  console.log(await page.title());
  await expect(page).toHaveTitle(/Playwright/);
    });




