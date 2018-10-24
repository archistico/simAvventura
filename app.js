import { Domanda, Risposta, Effetto, Simulatore, log } from "./external.js";

let eff0 = new Effetto(0,0,0,0);
let eff1 = new Effetto(1,0,0,0);
let eff2 = new Effetto(0,1,0,0);
let eff3 = new Effetto(0,0,1,0);
let eff4 = new Effetto(0,0,0,1);

let eff5 = new Effetto(-1,0,0,0);
let eff6 = new Effetto(0,-1,0,0);
let eff7 = new Effetto(0,0,-1,0);
let eff8 = new Effetto(0,0,0,-1);

let ris1 = new Risposta("Sì", eff1);
let ris2 = new Risposta("No", eff2);

let dom1 = new Domanda("Dom1", ris1, ris2);
let dom2 = new Domanda("Dom2", ris1, ris2);

let sim = new Simulatore();

sim.domande.push(dom1);
sim.domande.push(dom2);

log("---START---");
sim.simula([0,1]);
log(sim);
log("---STOP----");