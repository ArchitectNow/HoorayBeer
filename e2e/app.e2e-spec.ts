import { HooraybeerPage } from './app.po';

describe('hooraybeer App', () => {
  let page: HooraybeerPage;

  beforeEach(() => {
    page = new HooraybeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
