
function loadbook(fileName ,displayName){
    let url = fileName; 
    let currentBook = "";
    document.getElementById('doc-Title').innerHTML = displayName;


    var https = new XMLHttpRequest();
   
    
        //Make a Server Request (AJAX call)
 
      https.onreadystatechange = function(){
      if(https.readyState == 4 && https.status == 200){
         
           document.getElementById('content').innerHTML = currentBook;
          }
        
    }

    

    https.open('GET',url,true)//initilize request
    https.send();//sends request

}