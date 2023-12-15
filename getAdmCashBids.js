import puppeteer from "puppeteer";

const getAdmCashBids = async () => {

  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.goto("https://www.admfarmview.com/adm/cash-bids", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector('h5');

  const xPath = '//h5[contains(text(),"Montezuma")]/parent::div/following-sibling::div \
    /descendant::div[contains(text(),"Cash Milo")]/parent::div/following-sibling::div/div'
    
  let elements = await page.$x(xPath)  
  let miloPrice = await elements[0].evaluate(element => element.textContent)

  await browser.close();
  return miloPrice
};

export default getAdmCashBids;

