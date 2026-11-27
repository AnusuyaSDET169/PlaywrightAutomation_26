const { test,expect } = require('@playwright/test');


test('First Testcase ',async({page})=>
    {  

 await page.goto("https://www.google.com/maps");
   console.log(await page.title());
await expect(page).toHaveTitle('Google Maps');
});

test('login testcase',async({page})=>
    {  
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await page.title());
       await expect(page).toHaveTitle(/Practise/);
       await page.locator('#username').fill("anu0904@gmail.com");
       await page.locator('#password').fill("Yara@533");
       await page.locator('#signInBtn').click();
       console.log(await page.locator("[style*='block']").textContent());
       await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    });

    test.only('login with credentials',async({page})=>
    {
       await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       await page.locator("[id='userEmail']").fill("anus@gmail.com");
       await page.locator("#userPassword").fill("Vinod123");
       await page.locator("#login").click();
       console.log(await page.title());    
       await expect(page).toHaveTitle("Let's Shop");



    });




