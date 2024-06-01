import {test, expect,Browser,Page, Locator} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test(' Sidebar test', async () => {
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
//   await page.waitForTimeout(1000);
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
  // await page.pause();

   
  // const chapter1 = page.getByRole('link', { name: 'Unit 1:Unit 1 Getting Started' });
  // await chapter1.click();
//   await page.waitForTimeout(1000);
//   await page.locator('.blocklyPath').first().dragTo(page.locator('.blocklyMainBackground'));
//   const box1 = 
// await page.waitForTimeout(1000);
    const sidebar = await page.locator('#arrow');
    await sidebar.click();  

    const chapter11 = await page.getByRole('button', { name: '1.1 Chapter 1.1 - Scratch and' });
    await chapter11.click();

    const chapter12 = await page.getByRole('button', { name: 'Chapter 1.2 - Save and Share' });
    await chapter12.click(); 
    
    const chapter13 = await page.getByRole('button', { name: 'Chapter 1.3 - The Stage' });
    await chapter13.click();
     await page.pause();
     
  // const title = await page.title();
  // expect(title).toEqual('Qubits');
   
   
    await browser.close();

});