import { AppPage } from './app.po';

describe('prueba-blacksip App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Listado de fabricantes de aviones ftw!');
  });
});
