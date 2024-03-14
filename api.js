onmessage = async (e) => {
  console.log('Message received from main script');
  const response = await fetch(
    `https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country_currency_desc,exchange_rate,%20record_date&filter=record_date:gte:2015-01-01`
  );
  const json = await response.json();
  console.log(json);
  postMessage(JSON.stringify(json));
};
