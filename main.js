let app = document.querySelector('#app');
const myWorker = new Worker('./api.js');
myWorker.postMessage('Hello');
myWorker.onmessage = function (e) {
  app.innerHTML = `<pre>${JSON.stringify(JSON.parse(e.data), null, 4)}</pre>`;
  console.log(e.data);
};
app.innerHTML = `
  Hello
`;
