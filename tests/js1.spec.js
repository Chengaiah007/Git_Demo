import {test, expect} from '@playwright/test'

test('navigate to url', async({page})=>{
    await page.goto('https://playwright.dev/')
    const a=await page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div/a').isVisible();
    if(a==true){
        console.log("page successfully navigated");
    }
})