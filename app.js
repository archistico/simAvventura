import { Domanda, Risposta, Effetto, Simulatore, log } from "./external.js";
import { Info } from "./info.js";

let sim = new Simulatore();

sim.domande.push(new Domanda("Vuoi fare guerra il primo giorno?",
    new Risposta("Sì", new Effetto(10, 0, 0)),
    new Risposta("No", new Effetto(-10, 0, 0))
));

sim.domande.push(new Domanda("Bisogna aumentare le tasse?",
    new Risposta("Sì", new Effetto(0, 5, 0)),
    new Risposta("No", new Effetto(0, -5, 0))
));

sim.domande.push(new Domanda("Tumulti in piazza li fermiamo?",
    new Risposta("Sì", new Effetto(0, 0, 5)),
    new Risposta("No", new Effetto(0, 0, -5))
));

let info = new Info(SVG('infoSvg').size(200, 50));
info.chart(sim.denaro, sim.salute, sim.giustizia);

var app = new Vue({
    el: '#app',
    data: {
        domanda: sim.getDomanda(),
        risposta1: sim.getRisposta1(),
        risposta2: sim.getRisposta2(),
    },
    methods: {
        risposta1_click: function () {
            sim.risposto(0)
            domanda: sim.getDomanda()
            risposta1: sim.getRisposta1()
            risposta2: sim.getRisposta2()
            info.chart(sim.denaro, sim.salute, sim.giustizia)
        },
        risposta2_click: function () {
            sim.risposto(1)
            domanda: sim.getDomanda()
            risposta1: sim.getRisposta1()
            risposta2: sim.getRisposta2()
            info.chart(sim.denaro, sim.salute, sim.giustizia)
        }
    }
})

/*
log("---START---");
sim.setRisposte([0, 1]);
sim.simula();
log(sim);
log("---STOP----");
*/