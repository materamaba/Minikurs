// JavaScript source code
/*
 losuj od 1 do x
 seria x graj start time losuj od 0 do np. 10 i zapissz te warto ci
 po odczekaniu tego czasu zagraj od tego samego momentu tyle  e wido si  pokazuje
 je li dobrze dodaj ptk je li nie to nie i ez
 */
var uodp
var punkty = 0
function quiz() {
    var piosenka = Math.floor(Math.random() * 29);;
    if (piosenka == 0) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/1.webm"></video >');
        zmienglos()
        odp = "One Piece";
        typ = "Opening 3"
    }
    else if (piosenka == 1) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/2.webm"></video >');
        zmienglos()
        odp = "One Piece";
    }
    else if (piosenka == 2) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/3.webm"></video >');
        zmienglos()
        odp = "One Piece";
    }
    else if (piosenka == 3) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/4.webm"></video >');
        zmienglos()
         odp = "One Piece";
    }
    else if (piosenka == 4) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/5.webm"></video >');
        zmienglos()
        odp = "Berserk";
    }
    else if (piosenka == 5) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/6.webm"></video >');
        zmienglos()
        odp = "The Seven Deadly Sins";
    }
    else if (piosenka == 6) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/7.webm"></video >');
        zmienglos()
        odp = "Violet Evergarden";
    }
    else if (piosenka == 7) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "./amq/8.webm"></video >');
        zmienglos()
        odp = "Vinland Saga";
    }
    else if (piosenka == 8) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/q7ff5l.webm"></video >');
        zmienglos()
        odp = "A Silent Voice";
    }
    else if (piosenka == 9) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/grto5n.webm"></video >');
        zmienglos()
        odp = "Berserk";
    }
    else if (piosenka == 10) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://openings.moe/video/LogHorizon-OP01-NCBD.webm"></video >');
        zmienglos()
        odp = "Log Horizon";
    }
    else if (piosenka == 11) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/39bvmp.webm"></video >');
        zmienglos()
        odp = "Log Horizon";
    }
    else if (piosenka == 12) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/ee6j24.webm"></video >');
        zmienglos() //op1
        odp = "Gintama";
    }
    else if (piosenka == 13) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/m815im.webm"></video >');
        zmienglos() //op2
        odp = "Gintama";
    }
    else if (piosenka == 14) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/awpanw.webm"></video >');
        zmienglos() 
        odp = "Gintama";
    }
    else if (piosenka == 15) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/35vrom.webm"></video >');
        zmienglos()
        odp = "Gintama";
    }
    else if (piosenka == 16) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/bswx6r.webm"></video >');
        zmienglos()
        odp = "Gintama";
    }
    else if (piosenka == 17) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/8q5bm4.webm"></video >');
        zmienglos()
        odp = "Demon Slayer";
    }
    else if (piosenka == 18) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://nl.catbox.moe/jv7uvq.webm"></video >');
        zmienglos()
        odp = "Demon Slayer";
    }
    else if (piosenka == 19) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/v3poco.webm"></video >');
        zmienglos()
        odp = "Vinlad Saga";
    }
    else if (piosenka == 20) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/uftytg.webm"></video >');
        zmienglos()
        odp = "Vinland Saga";
    }
    else if (piosenka == 21) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/dhairf.webm"></video >');
        zmienglos()
        odp = "Vinland Saga";
    }
    else if (piosenka == 22) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/q29ldp.webm"></video >');
        zmienglos()
        odp = "One Piece";
    }
    else if (piosenka == 23) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/rt7xoy.webm"></video >');
        zmienglos()
        odp = "KONOSUBA";
    }
    else if (piosenka == 23) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/as16ya.webm"></video >');
        zmienglos()
        odp = "KONOSUBA";
    }
    else if (piosenka == 24) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/czo8sd.webm"></video >');
        zmienglos()
        odp = "KONOSUBA";
    }
    else if (piosenka == 25) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/3wrt9h.webm"></video >');
        zmienglos()
        odp = "KONOSUBA";
    }
    else if (piosenka == 26) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/53e7o7.webm"></video >');
        zmienglos()
        odp = "KONOSUBA";
    }
    else if (piosenka == 27) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://files.catbox.moe/okzp64.webm"></video >');
        zmienglos()
        odp = "KONOSUBA";
    }
    else if (piosenka == 28) {
        document.getElementById('amq').innerHTML = ('<video autoplay id="film" ><source src = "https://openings.moe/video/SuzumiyaHaruhiNoYuuutsu(2009)-OP01-NCBD.webm"></video >');
        zmienglos()
        odp = "The Melancholy Of Haruhi Suzumiya";
    }
    document.getElementById("film").currentTime = Math.floor(Math.random() * 50);;;
}
function potw() {
    var uodp = document.getElementById("pole").value;
    var lodp = document.getElementById("lodp").value;
    if (uodp == odp) {
        document.getElementById('ukr').style.display = 'none';
        punkty++
        document.getElementById('pkt').innerHTML = punkty;
        document.getElementById('nazwa').innerHTML = odp;
        setTimeout(() => { quiz(); document.getElementById('ukr').style.display = 'unset'; document.getElementById('nazwa').innerHTML = "?"; document.getElementById("pole").value = "";}, 5000);
    }
    else if (lodp == odp) {
        document.getElementById('ukr').style.display = 'none';
        punkty++
        document.getElementById('pkt').innerHTML = punkty;
        document.getElementById('nazwa').innerHTML = odp;
        setTimeout(() => { quiz(); document.getElementById('ukr').style.display = 'unset'; document.getElementById('nazwa').innerHTML = "?"; document.getElementById("pole").value = ""; }, 5000);
    }
    else {
        document.getElementById('ukr').style.display = 'none';
        document.getElementById('nazwa').innerHTML = odp;
        setTimeout(() => { quiz(); document.getElementById('ukr').style.display = 'unset'; document.getElementById('nazwa').innerHTML = "?"; document.getElementById("pole").value = "";}, 5000);
    }
}
function zmienglos() {
    var vol = document.getElementById("poziomglosnosci").value;
    document.getElementById("film").volume = vol;
    document.getElementById("siema").innerHTML = vol * 100;
}

function guzik() {
    if (document.getElementById('metoda').checked == true){
        document.getElementById('odppisanie').style.display = 'unset'
        document.getElementById('odplista').style.display = 'none'
        return false
    }
    else{
        document.getElementById('odppisanie').style.display = 'none'
        document.getElementById('odplista').style.display = 'unset'
        return false
    }
    return false;
}