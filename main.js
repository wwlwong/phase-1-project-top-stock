function fetchStocks(){
    return fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => sortStocks(stocks, "bottom"))
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

function renderFilteredStocks(stocks, filterSentiment){
  let filterStocks = stocks.filter(stock => stock.sentiment === filterSentiment);
  //addTableBody(filterStocks);
  filterStocks.forEach(stock => addTableBody(stock));
}

function searchStock(stocks, stockName){
  let result = stocks.find(stock=> stock.ticker === stockName);
  if (result == undefined){
    const tr = document.createElement('tr')
    const td0 = document.createElement('td');
    td0.innerHTML = "Stock not found";
    tableBody.append(tr, td0)
  }
  else {
    addTableBody(result);
  }
}

function sortStocks(stocks, sortBy){
  if (sortBy == "top"){
    const values = stocks
        .map(({ sentiment_score }) => sentiment_score)
        .sort((a, b) => b - a)
        .slice(0, 10)
    const tenStocks = stocks.filter(({ sentiment_score }) => values.includes(sentiment_score));
    tenStocks.forEach(stock => addTableBody(stock));
  }
  else {
    const values = stocks
        .map(({ sentiment_score }) => sentiment_score)
        .sort((a, b) => a - b)
        .slice(0, 10)
    const tenStocks = stocks.filter(({ sentiment_score }) => values.includes(sentiment_score));
    tenStocks.forEach(stock => addTableBody(stock));
  }
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