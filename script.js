
function loadbook(fileName ,displayName){
    let url = fileName; 
    let currentBook = "";
    document.getElementById('doc-Title').innerHTML = displayName;

    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
      if(xhttp.readyState == 4 && xhttp.status == 200){
          currentBook = xhttp.responseText;//Must be responceText
           document.getElementById('content').innerHTML = currentBook;

          

           document.getElementById('content').scrollTop = 0; 


          } 
       
    }
    xhttp.open('GET',url,true)//initilize request
    xhttp.send();//sends request

}