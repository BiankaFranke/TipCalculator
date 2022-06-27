console.log('it works');

let betragValue = document.querySelector("#betrag");
let personen = document.querySelector('#anzahlPersonen');
let service = document.querySelector("#serviceList").value;
let resultTotal;
let resultTip;
let resultPerPerson;

let tip = (event) => {
    event.preventDefault();
    betrag = Number(betragValue.value);
    personen = Number(personen.value);

    switch(service) {
        case 'bad':
            resultTip = (0.02 * betrag);
            resultTotal = betrag + resultTip;
            resultPerPerson = resultTotal / personen;
            break;
        case 'ok':
            resultTip = (0.10 * betrag);
            resultTotal = betrag + resultTip;
            resultPerPerson = resultTotal / personen;
            break;
        case 'great':
            resultTip = (0.20 * betrag);
            resultTotal = betrag + resultTip;
            resultPerPerson = resultTotal / personen;
            break;
        default:
            document.querySelector("#error").innerHTML = 'Bitte geben Sie einen Betrag und die Anzahl der Personen ein.';
    }
    document.querySelector("#tipResult").innerHTML = `Das Trinkgeld ist: <span>${resultTip} €</span>`;
    document.querySelector("#sumResult").innerHTML = `Die Gesamtsumme beträgt: <span>${resultTotal} €</span>`;
    document.querySelector("#sumPerson").innerHTML = `Der Preis pro Person ist: <span>${resultPerPerson} €</span>`;
}