
window.onload = function(){

  var Quote = function(text, author, quoteclass){
    this.text = text;
    this.author = author;
    this.quoteclass = quoteclass || "";
  }

  var quote1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript. ", "Jay Chetty");
  var quote2 = new Quote("The only CSS you need to know is background-color: tomato ", "Rick");
  var quote3 = new Quote("No Blockers *smug tone* ", "Keith");
  var quote4 = new Quote("Scaffold is nothing but a fiery hell. ", "Valerie");
  var quote5 = new Quote("That is quite obviously a frog. ", "Jay Chetty", "featured");
  var quotesList = [quote1, quote2, quote3, quote4, quote5];


  var getText = function(){
    var input = document.getElementById("quote-text-input");
    return input.value;
  }

  var getAuthor = function(){
    var input = document.getElementById("quote-author-input");
    return input.value;
  }

  var getClass = function(){
    var input = document.getElementById("quote-class-input");
    if(input.checked){
      return "featured"
    }
    else {
      return "quote"
    }
  }

  var addNewQuote = function(){
    var newUserQuote = new Quote(getText(), getAuthor(), getClass());
    var newUserQuoteItem = createQuoteItem(newUserQuote);
    filterQuote(newUserQuoteItem);
  }

  var createQuoteItem = function(quote){
    var newQuote = document.createElement("article");
    if(quote.quoteclass === "featured"){
      newQuote.className = "featured"
    }
    else {
      newQuote.classList.add("quote");
    }

    var newBlockQuote = document.createElement("blockquote");
    newBlockQuote.innerText = quote.text;

    var newCite = document.createElement("cite");
    newCite.innerText = quote.author;

    newBlockQuote.appendChild(newCite);
    newQuote.appendChild(newBlockQuote);
    return newQuote;
  }

  var quotesBox = document.getElementById('quotes-list');
  var featuredBox = document.getElementById('featured-quotes');

  var filterQuote = function(quote){
    if(quote.className === "featured"){
      featuredBox.appendChild(quote);
    }
    else {
      quotesBox.appendChild(quote);
    }
  }

  var addQuotes = function(){
    for (var i = 0; i < quotesList.length; i++) {
      var newQuote = createQuoteItem(quotesList[i]);
      filterQuote(newQuote);
    }
  }

  var qotd = document.querySelector('h2');

  qotd.innerText = "Featured Quotes";

  addQuotes();


  var button = document.getElementById('add-button');

  button.onclick = addNewQuote;
}
