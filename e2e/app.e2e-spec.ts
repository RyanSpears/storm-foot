import { StormFootPage } from './app.po';

describe('storm-foot App', function() {
  let page: StormFootPage;

  beforeEach(() => {
    page = new StormFootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
