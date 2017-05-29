import { RepairLinkFrontendPage } from './app.po';

describe('repair-link-frontend App', () => {
  let page: RepairLinkFrontendPage;

  beforeEach(() => {
    page = new RepairLinkFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('repair works!');
  });
});
