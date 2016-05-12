import { NoisyGuyPage } from './app.po';

describe('noisy-guy App', function() {
  let page: NoisyGuyPage;

  beforeEach(() => {
    page = new NoisyGuyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('noisy-guy works!');
  });
});
