import { Page, chromium, Browser} from '@playwright/test'
import { setDefaultTimeout} from '@cucumber/cucumber'

export class HelperBase
{
    
    page: Page;
    browser: Browser;

    constructor(page: Page)
    {
        this.page = page;
    }

    async launchBrowser()
    {
      this.browser = await chromium.launch( {headless:false, channel: 'chrome'}
       )
      this.page = await this.browser.newPage();
    }

    async waitInSeconds(timeInSeconds: number)
     {
        
        await this.page.waitForTimeout(timeInSeconds*1000);
    }
}