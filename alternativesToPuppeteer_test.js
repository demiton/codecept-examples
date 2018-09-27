
Feature('AlternativesToPuppeteer');



Scenario('test something', (I) => {
  I.amOnPage('http://www.google.com');
  I.fillField('q', 'alternatives to Puppeteer');
  I.click('btnK');
  I.waitForNavigation();
  console.log('--> After waiting');
  I.getLinks();
//  console.log('contenu : ');
  //console.log(content);
  //const results = Array.from(document.querySelectorAll('li.results-item'));
});
