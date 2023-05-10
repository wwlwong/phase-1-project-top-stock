function fetchStocks(){
    return fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => renderAllStocks(stocks));
}

function renderAllStocks(stocks) {
    const tableBody = document.getElementById('tableBody');
    stocks.forEach(stock => addTableBody(stock));
    //   {
    //   const tr = document.createElement('tr')
    //   const td0 = document.createElement('td');
    //   td0.innerHTML = stock.ticker;

    //   const td1 = document.createElement('td');
    //   td1.innerHTML = stock.sentiment;

    //   const td2 = document.createElement('td');
    //   td2.innerHTML = stock.sentiment_score;
    //   tableBody.append(tr, td0, td1, td2);
    // });
  }

function addTableBody(stock){
    const tr = document.createElement('tr')
    const td0 = document.createElement('td');
    td0.innerHTML = stock.ticker;

    const td1 = document.createElement('td');
    td1.innerHTML = stock.sentiment;

    const td2 = document.createElement('td');
    td2.innerHTML = stock.sentiment_score;
    tableBody.append(tr, td0, td1, td2);
}

function removeTableBody() {
  let element = document.getElementById("tableBody");
 
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }  
}


document.addEventListener('DOMContentLoaded', function() {
    fetchStocks();
  });