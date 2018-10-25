export class Info {
    constructor(instance) {
        this.w = 200;
        this.h = 100;
        this.instance = instance;
    }

    chart(denaro, salute, giustizia) {
        this.instance.clear();
        this.instance.rect(denaro, 10).move(0, 0).fill('#f06');
        this.instance.rect(salute, 10).move(0, 15).fill('#f06');
        this.instance.rect(giustizia, 10).move(0, 30).fill('#f06');
    }
}