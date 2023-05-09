fetch('https://tradestie.com/api/v1/apps/reddit')
  .then(response => response.json())
  .then(stocks => console.log(stocks));