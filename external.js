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
    }

    simula() {
        this.domande.forEach(dom => {
            log(dom.testo);
        });
    }
}
