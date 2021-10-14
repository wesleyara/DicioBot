const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');
console.log('Olá, eu sou o DicioBot e posso lhe mostrar o significado de qualquer palavra!')

async function botdicio()  {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const palavra = readlineSync.question('Insira a palavra desejada: ');
    await page.goto(`https://www.dicio.com.br/${palavra}/`);

    const significado = await page.evaluate(() => {
        return document.querySelectorAll("span")[8].textContent
      });
    
    const classe = await page.evaluate(() => {
        return document.querySelectorAll("span")[7].textContent
    });

    var palavras = palavra[0].toUpperCase() + palavra.substr(1);

    console.log(`A palavra ${palavras} é um ${classe} e tem como significado: ${significado}`);
  
    await browser.close();
  };

  botdicio();