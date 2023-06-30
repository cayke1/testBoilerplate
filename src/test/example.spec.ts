import { Builder, By, Key, until } from "selenium-webdriver";
import "chromedriver";

describe("Exemplo de teste", async () => {
  let driver = await new Builder().forBrowser('chrome').build();

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Deve realizar uma busca no Google", async () => {
    await driver.get("https://www.google.com");
    const element = await driver.findElement(By.name("q"));
    await element.sendKeys("Exemplo de busca", Key.RETURN);
    await driver.wait(
      until.titleIs("Exemplo de busca - Pesquisa Google"),
      5000
    );
  });

  after(async () => {
    await driver.quit();
  });
});
