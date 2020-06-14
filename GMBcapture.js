const puppeteer = require('puppeteer');
const fs = require('fs')

fs.readFile('GMB.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        console.log("getting screenshot for: " + array[i])
        getPic(array[i]);
    }
});

async function getPic(x) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=' + x);
  await page.setViewport({
    width: 1400,
    height: 1000,
    deviceScaleFactor: 1,
  });
  var name = x.replace(/\+/g, "_")
  await page.screenshot({path: 'GMB_img/' + name +'.png'});

  await browser.close();
}