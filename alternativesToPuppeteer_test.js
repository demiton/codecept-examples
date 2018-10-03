
Feature('AlternativesToPuppeteer');



Scenario('test something', async(I) => {
  I.amOnPage('http://www.google.com');
  I.fillField('q', 'alternatives to Puppeteer');
  //I.click('btnK');
  I.pressKey('Enter');
  I.waitForNavigation();
  console.log('--> After waiting');
  let results = await I.getLinks();
  console.log(results);
  await I.printRes(results);
  let url1 = results[1];
     I.click('div.g > div > div > h3 > a:nth-child(1)');
//  I.clickOnRes(link1,'.g');
//  I.click(document.querySelectorAll('div.g > div > div > h3 > a')[1]);
  // results.then(function(title){console.log('titre : '+title);});
  //console.log(content);
  //const results = Array.from(document.querySelectorAll('li.results-item'));
});
