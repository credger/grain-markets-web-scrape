import puppeteer from "puppeteer";

const getPrideAgCashBids = async () => {

  const browser = await puppeteer.launch({
    headless: "new"
  });

  const page = await browser.newPage();

  await page.goto("https://www.prideag.com/cashbids", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector('tr');

  let elements = await page.$x('//th[contains(text(), "MONTEZUMA")]/parent::tr/following-sibling::tr[5]/td[5]/a') //works
  let miloPrice = await elements[0].evaluate(element => element.textContent)
  miloPrice = miloPrice.slice(1,miloPrice.length) //remove $ prefix

  await browser.close();
  return miloPrice
};

export default getPrideAgCashBids
