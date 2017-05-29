import { browser, by, element } from 'protractor';

export class RepairLinkFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('repair-root h1')).getText();
  }
}
