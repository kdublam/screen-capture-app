const puppeteer = require('puppeteer');
const fs = require('fs')

fs.readFile('test.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        console.log("getting screenshot for: " + array[i])
        getPic(array[i], i);
    }
});

async function getPic(x, num) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const domain = x.substring(12, x.lastIndexOf("."))
  await page.goto(x);
  await page.setViewport({
    width: 1024,
    height: 768,
    deviceScaleFactor: 1,
  });
  await page.screenshot({path: domain +'.png'});

  await browser.close();
}

