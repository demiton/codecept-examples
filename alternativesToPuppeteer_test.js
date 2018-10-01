
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
  // results.then(function(title){console.log('titre : '+title);});
  //console.log(content);
  //const results = Array.from(document.querySelectorAll('li.results-item'));
});
