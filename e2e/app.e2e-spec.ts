import { AzureAppTestPage } from './app.po';

describe('azure-app-test App', () => {
  let page: AzureAppTestPage;

  beforeEach(() => {
    page = new AzureAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
