import { ANGgroceryListPage } from './app.po';

describe('anggrocery-list App', function() {
  let page: ANGgroceryListPage;

  beforeEach(() => {
    page = new ANGgroceryListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
