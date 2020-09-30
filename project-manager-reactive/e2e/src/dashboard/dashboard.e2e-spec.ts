import { browser, element, by } from 'protractor';

describe('Dashboard', function() {

  beforeEach(() => {
    browser.get('/');
  });

  it('should display the correct heading', () => {
    const heading = element(by.css('h1')).getText();
    const headings = element.all(by.css('h1')).getText();
    console.log(headings)
    heading.then((headingText) => {
      console.log(headingText);
    });
    expect(heading).toEqual('Dashboard');
    expect(headings).toContain('Dashboard');
  });

  it('should redirect to /dashboard', () => {
    expect(browser.getCurrentUrl()).toContain('/dashboard');
  });

});
