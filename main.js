
// Loads and displays all the stocks in the db.json
function renderAllStocks(stocks) {
  removeTableBody()  
  stocks.forEach(stock => addTableBody(stock));
}

// Filters all stocks in db.json based on sentiment and outputs the results
function renderFilteredStocks(stocks, filterSentiment){
  let filterStocks = stocks.filter(stock => stock.sentiment === filterSentiment);
  removeTableBody()
  filterStocks.forEach(stock => addTableBody(stock));
}

// Goes through db.json to find the matching ticker value and outputs the result
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

// Sorts all the stocks in db.json by sentiment score and outputs the top or bottom 10 stocks
function sortStocks(stocks, sortBy){
  removeTableBody()
  if (sortBy == "top"){
    const values = stocks
        .map(({ sentiment_score }) => sentiment_score)
        .sort((a, b) => b - a)
        .slice(0, 10)
    const topTen = stocks.filter(({ sentiment_score }) => values.includes(sentiment_score));
    topTen.forEach(stock => addTableBody(stock));
  }

  else {
    const values = stocks
        .map(({ sentiment_score }) => sentiment_score)
        .sort((a, b) => a - b)
        .slice(0, 10)
    const bottomTen = stocks.filter(({ sentiment_score }) => values.includes(sentiment_score));
    bottomTen.forEach(stock => addTableBody(stock));
  }
}

// Creates a table row for each stock to display the output. Adds a hyperlink for each ticker name to find the stock price
function addTableBody(stock){
    const tableBody = document.getElementById('tableBody');
    const tr = document.createElement('tr')
    const td0 = document.createElement('td');
    const a = document.createElement('a')
    a.setAttribute('href',`https://finance.yahoo.com/quote/${stock.ticker}`);
    a.innerHTML = stock.ticker;
    td0.appendChild(a);

    const td1 = document.createElement('td');
    td1.innerHTML = stock.sentiment;

    const td2 = document.createElement('td');
    td2.innerHTML = stock.sentiment_score;
    tableBody.append(tr, td0, td1, td2);
}

// Removes the table of the output results from the previous search to prevent search results from piling up down the results table
function removeTableBody() {
  let element = document.getElementById("tableBody");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }  
}



document.addEventListener('DOMContentLoaded', function() {
  const fetchJson = fetch('http://localhost:3000/stocks')
    .then(response => response.json());

  const filterOption = document.getElementById('filterBy');
  const button = document.getElementById('filterBtn');
  button.addEventListener('click', (e) => {
    let option = filterOption.value;
    if (option == "All"){
      fetchJson.then(stocks => renderAllStocks(stocks))
    }
    else if (option == "Bullish"){
      fetchJson.then(stocks => renderFilteredStocks(stocks, option))
    }
    else if (option == "Bearish"){
      fetchJson.then(stocks => renderFilteredStocks(stocks, option))
    }
    else if (option == "Top 10 Sentiment"){
      fetchJson.then(stocks => sortStocks(stocks, "top"))
    }
    else {
      fetchJson.then(stocks => sortStocks(stocks, "bottom"))
    }
  })

  const search = document.getElementById('ticker-search')
  search.addEventListener('submit', (e) => {
    e.preventDefault()
    removeTableBody()
    fetchJson.then(stocks => searchStock(stocks, document.getElementById('searchByTicker').value))
  })
});

