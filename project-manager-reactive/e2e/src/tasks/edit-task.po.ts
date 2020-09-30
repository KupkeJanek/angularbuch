import { browser, element, by, protractor} from 'protractor';

export class EditTaskPage {
  newUrl = '/tasks/new';
  navigateToNewPage() {
    return browser.get(this.newUrl);
  }

  navigateToEditPage(id: number) {
    return browser.get(`tasks/edit/${id}`);
  }

  fillForm(title: string, state: string) {
    element(by.name('title')).sendKeys(title);
    element(by.name('state')).element(by.css(`[value="${state}"]`))
      .click();
    //Firefox HACK:
    browser.actions().sendKeys( protractor.Key.ENTER ).perform();
  }

  save() {
    element(by.id('save')).click();
  }

  cancel() {
    return element(by.id('cancel')).click();
  }

  getAlert() {
    return browser.switchTo().alert();
  }

}

