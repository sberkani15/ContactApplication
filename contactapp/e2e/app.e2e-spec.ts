import { ContactappPage } from './app.po';

describe('contactapp App', () => {
  let page: ContactappPage;

  beforeEach(() => {
    page = new ContactappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
