function fetchStocks(){
    return fetch('https://tradestie.com/api/v1/apps/reddit')
    .then(response => response.json())
    .then(stocks => renderStocks(stocks));
}

function renderStocks(stocks) {
    const output = document.querySelector('output');
    stocks.forEach(stock => {
      const tr = document.createElement('tr')
      const td0 = document.createElement('td');
      td0.innerHTML = stock.ticker;

      const td1 = document.createElement('td');
      td1.innerHTML = stock.sentiment;

      const td2 = document.createElement('td');
      td2.innerHTML = stock.sentiment_score;
      output.append(tr, td0, td1, td2);
    });
  }

document.addEventListener('DOMContentLoaded', function() {
    fetchStocks();
  });