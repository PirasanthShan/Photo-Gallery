function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function clickMenu(){
  let closeButton = document.querySelector('#close-button')
  let menuButton = document.querySelector('#menu-button');
  let menu = document.querySelector('#menu');  
  
  menuButton.addEventListener('click', (e) =>{
    if(e.target == menuButton){
      menuButton.classList.add('menu-show');
      menu.classList.add('show-overlay');  
   
  closeButton.addEventListener('click', (e) =>{
    if(e.target == closeButton){
      closeButton.classList.remove('menu-show');
      menu.classList.remove('show-overlay');
      menuButton.classList.remove('menu-show')  
    
    }})} })
}   

let images1 = ['nature.img/img2.webp','nature.img/img3.webp','nature.img/img4.webp',
               'nature.img/img5.webp', 'nature.img/img6.webp','nature.img/img7.webp',
               'nature.img/img9.webp','nature.img/img10.webp','nature.img/img11.webp','nature.img/img12.webp',
               'nature.img/img13.webp','nature.img/img14.webp','nature.img/img15.webp','nature.img/img16.webp',
               'nature.img/img17.webp',]

function load(){
   let picture = document.getElementById('content');
   
   for(let i = 0; i < images1.length; i++){
   picture.innerHTML += 
   `  
    <div class="img-box">
    <img onclick="openImage(${i})" class="Bilder" src="${images1[i]}" alt="">
    </div>
  `
  }
}
                
function openImage(i){
  let fotos = document.getElementById('FullSize');
  fotos.innerHTML = `
  <div id="next" class="FullSize"> 
              
    <img onclick="prevImage(${i})" class="pfeil" src="logo/left.webp" alt="logo">
    <img class="box-img" src="${images1[i]}" alt="">
    <img onclick="nextImage(${i})" class="pfeil" src="logo/right.webp" alt="logo">
                    
    <div class="arrows">
       <img onclick="prevImage(${i})" src="logo/left.webp" alt="logo">
       <img onclick="nextImage(${i})" src="logo/right.webp" alt="logo">
    </div>
                      
   </div>`
                    
  remove();
  closeFullSize();
} 
              
function nextImage(i){
  i++;
   if(i == 15){
    i = 0;}
  openImage(i);
  closeFullSize()
}
              
function prevImage(i){
  if( i == 0){
     i = 15;}
  i--;
  openImage(i) 
  closeFullSize();
}
              
function closeFullSize(){
  let close = document.querySelector('#next')
                    
  close.addEventListener('click' ,(e) => {
  if(e.target == close){
  document.querySelector('#FullSize').classList.add('d-none')
  }
   });
  }
                
function remove(){
  document.querySelector('#FullSize').classList.remove('d-none')
}
 
 




    
    
    
   

  
          
  


      
  