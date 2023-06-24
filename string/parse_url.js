function parseURL(url) {
    const parsedURL = new URL(url);
    const protocol = parsedURL.protocol;
    const domain = parsedURL.hostname;
    const path = parsedURL.pathname;
  
    console.log(`протокол: ${protocol}`);
    console.log(`домен: ${domain}`);
    console.log(`шлях: ${path}`);
  }

let url = "https://itstep.org/ua/about";
parseURL(url);