import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer'

export default async function screenshot(
  url: string,
  width: number = 1080,
  height: number = 1920
) {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {}
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setViewport({ width, height })
  await page.goto(url, { waitUntil: 'networkidle2' })
  return await page.screenshot({ type: 'png' })
}
