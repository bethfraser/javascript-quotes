
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

  var inputText = document.getElementById("quote-text-input");
  var inputAuthor = document.getElementById("quote-author-input");
  var inputFeatured = document.getElementById("quote-class-input");

  var preview = document.getElementById("preview");

  var quotesBox = document.getElementById('quotes-list');
  var featuredBox = document.getElementById('featured-quotes');

  var getText = function(){
    return inputText.value;
  }

  var getAuthor = function(){
    return inputAuthor.value;
  }

  var getClass = function(){
    if(inputFeatured.checked){
      return "featured"
    }
    else {
      return "quote"
    }
  }

  var resetInputs = function(){
    inputText.value = "";
    inputAuthor.value = "";
    inputFeatured.checked = false;
    preview.innerHTML = "";
    preview.style.display = "none";
  }

  var addNewQuote = function(){
    var newUserQuote = new Quote(getText(), getAuthor(), getClass());
    var newUserQuoteItem = createQuoteItem(newUserQuote);
    filterQuote(newUserQuoteItem);
    resetInputs();
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

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";

    newQuote.appendChild(newBlockQuote);
    newQuote.appendChild(newCite);
    newQuote.appendChild(deleteButton);
    deleteButton.onclick = deleteQuote;

    return newQuote;
  }


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

  var deleteQuote = function(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
  }

  var showPreview = function(){
    preview.style.display = "block";
    preview.innerHTML = "<blockquote>" + inputText.value + "</blockquote><cite>" + inputAuthor.value + "</cite><br>";
    if(inputText.value === "" && inputAuthor.value === ""){
      preview.style.display = "none";
    }
  }

  inputFeatured.onclick = function(){
    if(preview.className === "quote"){
      preview.className = "featured";
    }
    else {
      preview.className = "quote";
    }
  }

  // ----------- actual functions being called after loading 

  addQuotes();

  var addButton = document.getElementById('add-button');

  addButton.onclick = addNewQuote;

  document.onkeyup = showPreview;

}
