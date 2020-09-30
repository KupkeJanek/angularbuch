import { browser, element, by } from 'protractor';
import {takeScreenshot} from '../helpers/take_screenshot';

describe('Task List (without Page Object)', () => {

  beforeEach(() => {
    browser.get('/tasks')
  });

  it('should allow searching for tasks', () => {
    element(by.css('#search-tasks')).sendKeys('Ersten');
    browser.sleep(500);
    const count =  element.all(by.className('task-list-entry')).count();
    expect(count).toEqual(1);
  });

  it('should work with no search results', () => {
    element(by.css('#search-tasks')).sendKeys('Ich existiere nicht');
    browser.sleep(500);
    const count =  element.all(by.className('task-list-entry')).count();
    expect(count).toEqual(0);
  });


});
