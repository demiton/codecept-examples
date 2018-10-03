
class GetData extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async getHtml(){
    const page = this.helpers['Puppeteer'].page;
    const myExtract = await page.evaluate(() => document.querySelectorAll("p").textContent);
    console.log(myExtract);
    return myExtract;
  }


async getLinks(){
  const page = this.helpers['Puppeteer'].page;
  let content = await page.evaluate(() => {
  let divs = [...document.querySelectorAll('div.g > div > div > h3 > a')];
  return divs.map((div) => div.href.trim());
});
return content;
}

async getResults(){
  const page = this.helpers['Puppeteer'].page;
  const result = await page.evaluate(() => {
  let title = document.querySelectorAll(".r");
  let content = document.querySelector(".g");

  return { title, content }
})
console.log(typeof result);
return new Promise(function(res,rej) {
    res(result);});
}

async getElements(){
  const page = this.helpers['Puppeteer'].page;
  let content = await page.evaluate(() => {
  let divs = [...document.querySelectorAll('div')];
  return divs.map((div) => div.textContent.trim());
});
return content;
}

async printRes(results){
  for(var i in results){
    console.log('i : '+i+' , result : '+results[i]);
  }
}

async clickOnRes(url,selector){
   I.click("//*[contains(text(), "+url+")]", selector);
}

}
module.exports = GetData;
