
function loadbook(fileName ,displayName){
    let url = fileName; 
    let currentBook = "";
    document.getElementById('doc-Title').innerHTML = displayName;

    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
      if(xhttp.readyState == 4 && xhttp.status == 200){
          currentBook = xhttp.responseText;//Must be responceText

          getStats(currentBook);

          //replace txt file line feeds with html <br>
          currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g , "<br>");

           document.getElementById('content').innerHTML = currentBook;
           
           document.getElementById('content').scrollTop = 0; 

          } 
       
    }
    xhttp.open('GET',url,true)//initilize request
    xhttp.send();//sends request
}

function getStats(content){
    var docLength = document.getElementById('doc-length');
    var wordCount = document.getElementById('word-count');
    var charCount = document.getElementById('char-count');
 
    let text = content.toLowerCase();
    let wordArray = text.match(/\b\S+\b/g);//stores words into a array
    let wordDic = {};

    //count words in word array

    for(let word in wordArray ){
        let wordValue = wordArray[word];
        if(wordDic[wordValue] > 0){
            wordDic[wordValue] += 1;
        } else {
            wordDic[wordValue] = 1;                                                                                                           
        }
    }

    let wordlist = sortProperties(wordDic); 
    // Get the top 5 words
    var top5words = wordlist.slice(0,6);//stores the first 5 arrat words in a var
 
    var least5words = wordlist.slice(-6,wordlist.length);

    ultemp(top5words,document.getElementById('most-used'));
    ultemp(least5words,document.getElementById('least-used'));
}


function ultemp(items,element){
    let rowtemp = document.getElementById('template-ul-items');
    let tempHTML = rowtemp.innerHTML;
    let results = "";

   for(let i = 0; i<items.length-1; i++){
        results += tempHTML.replace('{{val}}',items[i][0]+ " : " + items[i][1] + "time(s)");
        }
        element.innerHTML = results;
}
function sortProperties(obj){
    //convert obj to an array
    let returnArray = Object.entries(obj);//returns array

    //sort through the array by value
    returnArray.sort((first , second)=>{
        return second[1] - first[1];
    });
    return returnArray;
}