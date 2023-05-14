## Top Stocks from Wallstreetbets

### Description:
Allows user to search from a list of top stocks by ticker name and displays the sentiment and sentiment score

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

In addition, each ticker name in the search result is a hyperlink to Yahoo finance that shows the stock's current market price.

### Credits:

The data in db.json was copied from a public API due to CORS.<br /> 
Original API link: https://tradestie.com/api/v1/apps/reddit <br />
Reddit Stocks - Top Stocks from Wallstreetbets
