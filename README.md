## Top Stocks from Wallstreetbets

### Description:
Allows user to search from a list of top stocks by ticker name and displays the sentiment and sentiment score
There are 50 stocks in the database:

| AAPL | ABNB | AFRM | AI | AMD |
|---|---|---|---|---|
| ANY | BBBY | BY | CC | CMA | 
| CVNA | CVS | DIS | EOD | EV | 
| FRC| FUBO | GM | HAS | HOOD | 
| III | JP | JPM | LAC | LCID | 
| MSFT | NFLX | NOW | NVAX | NVDA | 
| ON | OXY | PACW | PLAN | PLAY | 
| PLTR | PYPL | QQQ | REAL | RIVN | 
| SPCE | SQQQ| TECH | TSLA | TV | 
| TWLO| UPST | VERY | WAL | WEN | 

### Installation:

1. If not already done so, install JSON server globally on your machine with this command:
npm install -g json-server

2. Clone this repository

3. Open the directory of the db.json file and run the JSON server by with this command:
 json-server --watch db.json

4. Install the Postman app if not already done so at https://www.postman.com/downloads/

5. Open Postman. On the right side, click the first option: "Create a request." In the input field with GET, enter the following URL: http://localhost:3000/stocks. Then click the Send button. 

5. In the project directory, open index.html  


### How to use:

Stocks sentiment can be viewed in 2 ways. 
1. Search by Ticker: 
Enter the stock ticker name in the search field and click search. If the stock is in the database, the stock ticker name, sentiment, and sentiment score will be shown.

2. Filter Stocks By:
Choose one of the following option:
-Display all stocks in the database
-Display stocks with Bullish sentiment
-Display stocks with Bearish sentiment
-Display the 10 stocks with the highest sentiment score
-Display the 10 stocks with the lowest sentiment score

![Untitled](https://github.com/wwlwong/phase-1-project-top-stock/assets/102167991/de5ae94f-60dc-474b-872f-7ec45e4c83a5)

In addition, each ticker name in the search result is a hyperlink to Yahoo finance that shows the stock's current market price.

### Credits:

The data in db.json was copied from a public API due to CORS.<br /> 
Original API link: https://tradestie.com/api/v1/apps/reddit <br />
Reddit Stocks - Top Stocks from Wallstreetbets <br />

Background image from https://cdn.pixabay.com/photo/2015/02/20/06/19/stock-exchange-642896_960_720.jpg
