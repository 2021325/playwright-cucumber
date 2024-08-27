import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { Browser, chromium, Page} from '@playwright/test'

let browser: Browser
let page: Page

setDefaultTimeout(60000)

Given('user is page {string}', async function (homePage: string) {
    
    browser = await chromium.launch({headless: false})
    page = await browser.newPage()

    await page.goto(homePage)

  });

Then('user provides email {string} and password {string}', async function (emailID: string, password: string) {
    await page.getByRole('link', {name: 'Sign in'}).click()
    await page.getByRole('textbox', {name:'email'}).fill(emailID)
    await page.getByRole('textbox', {name:'password'}).fill(password)
    await page.getByRole('button', {name: 'Sign in'}).click()

    //await page.close()

  });

