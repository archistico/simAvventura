import { Domanda, Risposta, Effetto, Simulatore, log } from "./external.js";

let sim = new Simulatore();

sim.domande.push(new Domanda("Domanda", 
                new Risposta("Sì", new Effetto(10,0,0)), 
                new Risposta("No", new Effetto(0,10,0))
                ));


log("---START---");
sim.setRisposte([0]);
sim.simula();
log(sim);
log("---STOP----");