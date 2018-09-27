
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
  const stories = await page.evaluate(() => {
  const links = Array.from(document.querySelectorAll('div.title > a'))
    return links.map(link => link.href).slice(0, 10);
  })


  return console.log(stories);
}
}

module.exports = GetData;
