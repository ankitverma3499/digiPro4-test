import {test, expect,Browser,Page, Locator} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test('Drag and drop test', async () => {
    const browser : Browser = await webkit.launch({headless:false});
    const page : Page = await browser.newPage();
    await page.goto('https://ci.myqubit.co/en/dashboard');

    const students = await page.getByLabel('Student Account');
      await students.click();
  
      const continueButton = await page.getByRole('button', { name: 'Continue' });    
      await continueButton.click();
    
  
     const byEmail = await page.getByRole('button', { name: 'Email' });    
      await byEmail.click();
    
  // const emailId:Locator = await page.locator('#input-email');
  // const password:Locator = await page.locator('#input-password');
  // const loginButton:Locator = await page.locator("[value='Login']");
  // 
//  const launchButton:Locator = await page.locator("[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary h-10 px-4 py-2 mt-2']");
 
  //  await emailId.fill("pwtest@opencart.com");
  //  await password.fill("playwright@123");
  // await loginButton.click();    
  // await launchButton.click();
    // const title = await page.title();
    // console.log("home page title : ",title);
    // await page.screenshot({path: 'login.png'});
    // expect(title).toEqual('Account Login');

  const username =await  page.getByPlaceholder('Enter Email Address');
  await page.waitForTimeout(1000);
  await username.fill('asher@gmail.com')
  
  const password = await page.getByPlaceholder('Enter Password');
  await password.fill('welcome');
  const login =await page.getByRole('button', { name: 'Login' });
  await login.click();
  
  
  
  
  const courses =await page.getByRole('button', { name: 'Courses' });
  await courses.hover();
  
  
  // await page.waitForTimeout(1000);
  
  // const courses = page.getByRole('button', { name: 'Courses' });
  // const courses = page.getByRole('button', { name: 'Courses' }).locator;
  // await courses.hover();

  const level4 = await page.getByRole('link', { name: 'DigiPro Level 04 Learn the' })
  await level4.click();

  const chapter1 = await page.getByRole('link', { name: 'Unit 1:Unit 1 Getting Started' });
  await chapter1.click();

  const launchButton =await  page.getByRole('button', { name: 'Launch Scratch' });  
  await launchButton.click();
//   await page.pause();

   
  
 
  await page.frameLocator('iframe[title="Scratch Application"]').locator('g').filter({ hasText: /^10movesteps$/ }).locator('path').first().dragTo(page.frameLocator('iframe[title="Scratch Application"]').locator('.blocklyMainBackground'));
//   await page.pause();
  const title = await page.title();
  expect(title).toEqual('Qubits');
  // await page.pause();  
   
   
   
    await browser.close();

});