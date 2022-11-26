var tlo = 'home'


let wysokosc = screen.height;
document.getElementById('ramka').style.height = wysokosc + 'px'


   function zmiana(){
      if (tlo == 'listy') {
         document.getElementById("style").innerHTML = ('<style> body{background-color: #121212;} iframe{height:130vh;}</style>');
         //document.getElementById("ramka").style.height = '340rem'
      }
      else if (tlo == 'tabelaKolorow'){
         document.getElementById("style").innerHTML = ('<style>body {background-image: url("./Tabela z kolorami/bg.jpg");background-repeat: no-repeat;background-attachment: fixed;background-size: cover;}</style>');
      }
      else if (tlo == 'home'){
         document.getElementById("style").innerHTML = ('<style>body{background-image: url(https://geex.x-kom.pl/wp-content/uploads/2021/10/html-scaled.jpg);background-repeat: no-repeat;background-attachment: fixed;background-size: cover;}</style>');
      }
      else if (tlo == 'html'){
         document.getElementById("style").innerHTML = ('<style>body {font-family: Arial;color: white;background: url(./img/gory.jpg);background-repeat: no-repeat;background-attachment: fixed;background-size: cover;}.bg{backdrop-filter: blur(8px);}</style>');
      }
      else if (tlo == 'css'){
         document.getElementById("style").innerHTML = ('<style>body{background-image: url(https://www.nawpic.com/media/2020/berserk-nawpic-49.jpg);background-repeat: no-repeat;background-attachment: fixed;background-size: cover; }</style>');
      }
      else if (tlo == 'spr'){
         document.getElementById("style").innerHTML = ('<style>body{background-color:#A0B050;</style>');
      }
      else if (tlo == 'tll'){
         document.getElementById("style").innerHTML = ('<style>body{background-color: #121212;</style>');
      }
      else if (tlo == 'form'){
         document.getElementById("style").innerHTML = ('<style>body {font-family: Arial;color: white;background: url(./Formularz/Formularze/img/bg.jpg);background-repeat: no-repeat;background-attachment: fixed;background-size: cover;}.bg{backdrop-filter: blur(8px);}</style>')
         //document.getElementById("ramka").style.height = '49rem'
      }
      else if (tlo == 'multimedia'){
         document.getElementById("style").innerHTML = (' ')
         //document.getElementById("ramka").style.height = '590rem'
      }
         else if (tlo == 'ciekawostki'){
         document.getElementById("style").innerHTML = ('<style>body {background: url(./img/tlo.jpg);background-repeat: no-repeat;background-attachment: fixed;background-size: cover;}</style>')
         //document.getElementById("ramka").style.height = '135rem'
      }
      else if (tlo == 'linki'){
         document.getElementById("style").innerHTML = ('<style>body {font-family: Arial;color: white;background: url(./img/bg.jfif);background-repeat: no-repeat;background-attachment: fixed;background-size: cover;}</style>')
      }
      else if (tlo == 'kontakt'){
         document.getElementById("style").innerHTML = ('<style>body{background-color: #242424;</style>')
      }
      
   }
zmiana()


