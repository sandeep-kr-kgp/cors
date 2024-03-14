let app = document.querySelector('#app');
const myWorker = new Worker('./api.js');
myWorker.postMessage('Hello');
myWorker.onmessage = function (e) {
  app.innerHTML = `<pre>${JSON.stringify(JSON.parse(e.data), null, 4)}</pre>`;
  console.log(e.data);
};
const response = fetch(
  `https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country_currency_desc,exchange_rate,%20record_date&filter=record_date:gte:2015-01-01`
);
console.log('response in main thread', response);
app.innerHTML = `
  Hello
`;
