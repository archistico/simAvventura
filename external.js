export const log = message => console.log(message);

export class Effetto {
    constructor(denaro, salute, giustizia) {
        this.denaro = denaro;
        this.salute = salute;
        this.giustizia = giustizia;
    }
}

export class Risposta {
    constructor(testo, effetto) {
        this.testo = testo;
        this.effetto = effetto;
    }
}

export class Domanda {
    constructor(testo, risposta1, risposta2) {
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
        this.risposte = [];
        this.contatore = 0;
    }

    getParametri() {
        log("Denaro: " + this.denaro + " | Salute: " + this.salute + " | Giustizia: " + this.giustizia);
        log("-----------------------------");
    }

    aggiorna(eff) {
        this.denaro += eff.denaro;
        this.salute += eff.salute;
        this.giustizia += eff.giustizia;
    }

    simula() {
        this.getParametri();
        let contRisp = 0;
        this.domande.forEach(dom => {
            log(dom.testo + "? : " + dom.risposta1.testo + " / " + dom.risposta2.testo);
            if (this.risposte[contRisp] == 0) {
                this.aggiorna(dom.risposta1.effetto);
            } else {
                this.aggiorna(dom.risposta2.effetto);
            }
            this.getParametri();
            contRisp += 1;
        });
    }

    risposto(ris) {
        if (ris == 0) {
            this.aggiorna(this.domande[this.contatore].risposta1.effetto);
        } else {
            this.aggiorna(this.domande[this.contatore].risposta2.effetto);
        }
        this.getParametri();
    }

    avanza() {
        this.contatore+=1;
    }

    getDomanda() {
        return this.domande[this.contatore].testo;
    }

    getRisposta1() {
        return this.domande[this.contatore].risposta1.testo;
    }

    getRisposta2() {
        return this.domande[this.contatore].risposta2.testo;
    }

    setRisposte(risposte) {
        if (typeof (risposte) !== "undefined" && risposte !== null && this.domande.length == risposte.length) {
            this.risposte = risposte;
        } else {
            throw new Error("Errore il numero delle risposte non copre tutte le domande");
        }
    }
}
