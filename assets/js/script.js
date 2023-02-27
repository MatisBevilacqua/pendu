let result = document.querySelector("#content");
let content = document.querySelector("input[type=text]");
let submit = document.querySelector("input[type=submit]");
let word = ["VOITURE", "FRUIT", "JEU", "NATURE", "ELEMENTS", "ANE","AXE","BEL","BIP","CAR","COL","COQ","COR","COU","CRI","GAG","GAZ","GEL","JUS","NET","NUL","VAL","SKI","SOT","TAS","TIC","ATRE","BEAU","BETE","BOXE","BRUN","CERF","CHEZ","CIRE","DAME","DENT","DOCK","DODO","DRAP","DUNE","EMEU","FADO","FAUX","IBIS","JAZZ","JOLI","JOUE","KAKI","LOGO","LOIN","LONG","LUNE","LYNX","MINE","MURE","OUIE","OURS","PION","RHUM","RIDE","ROCK","SEAU","TEST","THYM","TROU","TRUC","USER","VERT","YOGI","WATT","ACCES","AIMER","ALOES","ASSEZ","AVION","AWALE","BALAI","BANJO","BARBE","BONNE","BRUIT","BUCHE","CACHE","CAPOT","CARTE","CHIEN","CRANE","CYCLE","EBENE","ESSAI","GIFLE","HONNI","JAMBE","KOALA","LIVRE","LOURD","MAMAN","MOULT","NOEUD","ORTIE","PECHE","POIRE","POMME","POSTE","PRUNE","RADAR","RADIS","ROBOT","ROUTE","RUGBY","SEUIL","TAUPE","TENUE","TEXTE","TYRAN","USUEL","VALSE","ACAJOU","AGNEAU","ALARME","ANANAS","ANGORA","ANIMAL","ARCADE","AVIRON","AZIMUT","BABINE","BALADE","BONZAI","BASSON","BILLET","BOUCHE","BOUCLE","BRONZE","CABANE","CAIMAN","CLOCHE","CHEQUE","CIRAGE","COCCYX","CRAYON","GARAGE","GOSPEL","GOULOT","GRAMME","GRELOT","GUENON","HOCHET","HORMIS","HUMOUR","HURLER","JARGON","LIMITE","LIONNE","MENTHE","OISEAU","PODIUM","POULPE","POUMON","PUZZLE","QUARTZ","RAPIDE","SEISME","TETINE","TOMATE","WALABI","WHISKY","ZIPPER","ABRITER","BALLAST","BARYTON","BASSINE","BATAVIA","BILLARD","BRETZEL","CITHARE","CHARIOT","CLAIRON","CORBEAU","CORTEGE","CRAPAUD","CYMBALE","DENTIER","DJEMBE","DRAPEAU","EXEMPLE","FOURMIS","GRANDIR","ICEBERG","JAVELOT","JOCKEY","JOURNAL","JOURNEE","JOUXTER","LOSANGE","MACADAM","MONDIAL","NOTABLE","OXYGENE","PANIQUE","PETROLE","POTERIE","POUVOIR","RENEGAT","SCOOTER","SENTEUR","SIFFLET","SPIRALE","SUCETTE","STROPHE","TONNEAU","TROUSSE","TUNIQUE","UKULELE","VAUTOUR","ZOZOTER","AQUARIUM","ARAIGNEE","ARBALETE","ARCHIPEL","BANQUISE","BATTERIE","BROCANTE","BROUHAHA","CAPELINE","CLAVECIN","CLOPORTE","DEBUTANT","DIAPASON","GANGSTER","GOTHIQUE","HAUTBOIS","HERISSON","LOGICIEL","OBJECTIF","PARANOIA","PARCOURS","PASTICHE","QUESTION","QUETSCHE","SCARABEE","SCORPION","SYMPTOME","TABOURET","TOMAHAWK","TOUJOURS","TOURISME","TRIANGLE","UTOPIQUE","ZEPPELIN","ACCORDEON","ASCENSEUR","ASCENSION","ASEPTISER","AUTOROUTE","AVALANCHE","BALALAIKA","BILBOQUET","BOURRICOT","BRILLANCE","CABRIOLET","CONTRARIO","CORNEMUSE","DANGEREUX","EPLUCHAGE","FEODALITE","FORTERESSE","GONDOLIER","GRAPHIQUE","HOROSCOPE","INTREPIDE","KLAXONNER","MASCARADE","METAPHORE","NARRATEUR","PERIPETIE","POPULAIRE","PRINTEMPS","QUEMANDER","TAMBOURIN","VESTIAIRE","XYLOPHONE","ACROSTICHE","APOCALYPSE","ATTRACTION","AVENTURIER","BOUILLOTTE","CITROUILLE","CONTROVERSE","COQUELICOT","DISSIMULER","FLIBUSTIER","FORESTIERE","GRENOUILLE","IMPOSSIBLE","LABYRINTHE","MAHARADJAH","PRUDEMMENT","QUADRICEPS","SOLILOQUER","SUBJECTIVE","BACCALAUREAT","ABRACADABRA","FRANCOPHILE","PANDEMONIUM","CHLOROPHYLLE","METALLURGIE","METAMORPHOSE","MONTGOLFIERE","KALEIDOSCOPE","CONQUISTADOR","CONSPIRATEUR","RHODODENDRON","QUALIFICATION","PROTOZOAIRE","QUADRILATERE","ZYGOMATIQUE","SORCELLERIE","BELLIGERANT"];
let createSpan = null;
let userLetter;
let resultGameOver = 5;
let gameOverText = document.querySelector("#gameOverText");
let winText = document.querySelector("#winText");
function randomize(tab) {
    let i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}
let game = randomize(word);
let resultEnd = game[0];
function selectWord() {
    for (let i = 0; i < resultEnd.length; i++) {
        createSpan = document.createElement("span");
        result.appendChild(createSpan);
    }
}
function check(e) {
    e.preventDefault();
    let indice = [];
    if (content.value.length < 2) {
        userLetter = content.value;
        let wordSplit = resultEnd.split("");
        let resultUser = wordSplit.includes(userLetter.toUpperCase());
            if (resultUser) {
                for (let j = 0; j < wordSplit.length; j++) {
                    if (wordSplit[j] === userLetter.toUpperCase()) {
                        indice.push(j);
                    }
                }
            } else {
                resultGameOver -= 1;
                if (resultGameOver <= 0) {
                    alert("Perdu !");
                    gameOverText.classList.remove("none");
                    content.disabled = true;
                    submit.disabled = true;
                    result.style.color = "black";
                    result.style.borderBottomColor = "transparent";
                }
            }
            let spans = document.querySelectorAll('span');
            for(let i = 0; i < spans.length; i++){
                for(let j = 0; j < indice.length; j++){
                    if(i === indice[j]){
                        spans[i].style.color = 'black';
                        spans[i].innerHTML = userLetter.toUpperCase();
                        spans[i].style.borderBottomColor = 'transparent';
                    }
                }
            }
    } else {

    }

    let winCheck = document.querySelectorAll("#content span[style*='color']");
    let car = "";
    for (let win of winCheck) {
        car += win.innerText;
    }
    if (car === resultEnd) {
        content.disabled = true;
        submit.disabled = true;
        winText.classList.remove("none");
    }
}
selectWord();
submit.addEventListener("click", check);
