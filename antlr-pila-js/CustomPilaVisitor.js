import PilaVisitor from ".//generated/PilaVisitor.js";

export default class CustomPilaVisitor extends PilaVisitor {
  constructor() {
    super();
    this.pila = [];
    this.transpilado = [];
    this.nombrePila = "";
  }

  visitProg(ctx) {
    return this.visitChildren(ctx);
  }

  visitSentencia_pila(ctx) {
    this.nombrePila = ctx.nombre().getText();

    const operaciones = ctx.operaciones();
    for (const op of operaciones) {
      this.visit(op);
    }

    return null;
  }

  visitCrear(ctx) {
    const valores = ctx.lista().valor();
    this.pila = valores.map((v) => this.obtenerValor(v));

    const valoresTexto = this.pila.map((v) => JSON.stringify(v)).join(", ");
    const jsLine = `let ${this.nombrePila} = [${valoresTexto}];`;

    this.transpilado.push(jsLine);

    return null;
  }

  visitPush(ctx) {
    const valor = this.obtenerValor(ctx.valor());
    this.pila.push(valor);

    const jsLine = `${this.nombrePila}.push(${JSON.stringify(valor)});`;
    this.transpilado.push(jsLine);

    return null;
  }

  visitPop(ctx) {
    if (this.pila.length === 0) {
    } else {
      const sacado = this.pila.pop();
    }

    const jsLine = `${this.nombrePila}.pop();`;
    this.transpilado.push(jsLine);

    return null;
  }

  visitPeek(ctx) {
    const tope = this.pila[this.pila.length - 1];

    const jsLine = `peek → ${tope} //Es el elemento que se encuentra en el ultimo lugar de la pila `;
    this.transpilado.push(jsLine);

    return null;
  }

  obtenerValor(ctx) {
    if (ctx.numero()) {
      return Number(ctx.numero().getText());
    }

    if (ctx.texto()) {
      return ctx.texto().getText();
    }

    return null;
  }
}
