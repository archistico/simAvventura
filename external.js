export const log = message => console.log(message);

export class Effetto {
    constructor (denaro, salute, giustizia) {
        this.denaro = denaro;
        this.salute = salute;
        this.giustizia = giustizia;
    }
}

export class Risposta {
    constructor (testo, effetto) {
        this.testo = testo;
        this.effetto = effetto;
    }
}

export class Domanda {
    constructor (testo, risposta1, risposta2) {
        this.testo = testo;
        this.risposta1 = risposta1;
        this.risposta2 = risposta2;
    }
}

export class Simulatore {
    constructor() {
        this.domande = [];
        this.denaro = 100;
        this.salute = 100;
        this.giustizia = 100;
    }

    getParametri() {
        log("Denaro: "+this.denaro+" | Salute: "+this.salute+" | Giustizia: "+this.giustizia);
        log("-----------------------------");
    }

    aggiorna(eff) {
        this.denaro += eff.denaro;
        this.salute += eff.salute;
        this.giustizia += eff.giustizia;
    }

    simula(arr) {
        this.getParametri();
        let contRisp = 0;
        this.domande.forEach(dom => {
            log(dom.testo+"? : "+ dom.risposta1.testo + " / "+dom.risposta2.testo);
            if(arr[contRisp] == 0) {
                this.aggiorna(dom.risposta1.effetto);
            } else {
                this.aggiorna(dom.risposta2.effetto);
            }
            this.getParametri();
            contRisp+=1;
        });
    }
}
