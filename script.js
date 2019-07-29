
function loadbook(fileName ,displayName){
    let url = fileName; 
    let currentBook = "";
    document.getElementById('doc-Title').innerHTML = displayName;

    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
      if(xhttp.readyState == 4 && xhttp.status == 200){
          currentBook = xhttp.responseText;//Must be responceText

          //replace txt file line feeds with html <br>
          currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, "<br>");

           document.getElementById('content').innerHTML = currentBook;
           
           document.getElementById('content').scrollTop = 0; 

          } 
       
    }
    xhttp.open('GET',url,true)//initilize request
    xhttp.send();//sends request
}

function getStats(){
    //I could toltally go and visit them, at the blog post and the end of the weekend is coming and it is here to stay       
    //this is a second line 


}