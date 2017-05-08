import { Dynacomp2Page } from './app.po';

describe('dynacomp2 App', () => {
  let page: Dynacomp2Page;

  beforeEach(() => {
    page = new Dynacomp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
