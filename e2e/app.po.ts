export class NoisyGuyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('noisy-guy-app h1')).getText();
  }
}
