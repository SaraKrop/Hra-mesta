document.getElementById("tlacitko").addEventListener("click", function() {

let countriesAndCapitals = {
    "Albánie": "Tirana",
    "Andorra": "Andorra la Vella",
    "Bělorusko": "Minsk",
    "Belgie": "Brusel",
    "Bosna a Hercegovina": "Sarajevo",
    "Bulharsko": "Sofia",
    "Chorvatsko": "Záhřeb",
    "Černá Hora": "Podgorica",
    "Česká republika": "Praha",
    "Dánsko": "Kodaň",
    "Estonsko": "Tallin",
    "Finsko": "Helsinky",
    "Francie": "Paříž",
    "Německo": "Berlín",
    "Řecko": "Atény",
    "Maďarsko": "Budapešť",
    "Island": "Reykjavík",
    "Irsko": "Dublin",
    "Itálie": "Řím",
    "Kosovo": "Priština",
    "Lotyšsko": "Riga",
    "Lichtenštejnsko": "Vaduz",
    "Litva": "Vilnius",
    "Lucembursko": "Luxemburg",
    "Severní Makedonie": "Skopje",
    "Malta": "Valletta",
    "Moldavsko": "Kišiněv",
    "Monako": "Monaco",
    "Nizozemsko": "Amsterdam",
    "Norsko": "Oslo",
    "Polsko": "Varšava",
    "Portugalsko": "Lisabon",
    "Rakousko": "Vídeň",
    "Rumunsko": "Bukurešť",
    "Rusko": "Moskva",
    "San Marino": "San Marino",
    "Srbsko": "Bělehrad",
    "Slovensko": "Bratislava",
    "Slovinsko": "Lublaň",
    "Španělsko": "Madrid",
    "Švédsko": "Stockholm",
    "Švýcarsko": "Bern",
    "Turecko": "Ankara",
    "Ukrajina": "Kyjev",
    "Velká Británie": "Londýn",
    "Vatikán": "Vatikán"
};

let availableCountries = Object.keys(countriesAndCapitals);

let guessedCapitals = [];

while (availableCountries.length > 0) {
    let randomIndex = Math.floor(Math.random() * availableCountries.length);
    let country = availableCountries[randomIndex];
    availableCountries.splice(randomIndex, 1);

    let capital = countriesAndCapitals[country];

    let guessedCapital = new Array(capital.length).fill("-").join('');

    while (guessedCapital.toLowerCase() !== capital.toLowerCase()) {
        let userGuess = prompt("Hádejte hlavní město země " + country + ": " + guessedCapital + "\nZadejte písmeno nebo celé slovo:");

        if (userGuess.length > 1) {
            if (userGuess.toLowerCase() === capital.toLowerCase()) {
                guessedCapital = capital;
            } else {
                console.log("Tohle není správné město. Zkuste to znovu.");
            }
        } else {
            let capitalArr = guessedCapital.split('');
            for (let i = 0; i < capital.length; i++) {
                if (capital[i].toLowerCase() === userGuess.toLowerCase()) {
                    capitalArr[i] = capital[i];
                }
            }
            guessedCapital = capitalArr.join('');
        }
    }
    console.log("Správně! Hlavní město země " + country + " je " + capital + ".");
    guessedCapitals.push(country + ": " + capital);
    
    if (availableCountries.length > 0) {
        let continueGame = prompt("Správně! Chcete hádat další město? (ano/ne)");
        if (continueGame.toLowerCase() === "ne") {
            break;
        }
    }
}
console.log("Ukončili jste hru. Uhodli jste následující hlavní města:");
let resultsElement = document.getElementById('results');
resultsElement.innerHTML = "<h2>Ukončili jste hru. Uhodli jste následující hlavní města:</h2>";
for (let capital of guessedCapitals) {
    resultsElement.innerHTML += "<p>" + capital + "</p>";
}

});