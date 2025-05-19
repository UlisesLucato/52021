import PilaLexer from "./generated/PilaLexer.js";
import PilaParser from "./generated/PilaParser.js";
import CustomPilaVisitor from "./CustomPilaVisitor.js";

import antlr4, {
  CharStreams,
  CommonTokenStream,
  ParseTreeWalker,
} from "antlr4";

import fs from "fs";

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    console.log("No se encontró el archivo input.txt");
  }

  let inputStream = CharStreams.fromString(input);

  let lexer = new PilaLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new PilaParser(tokenStream);
  let tree = parser.prog();

  if (parser.syntaxErrorsCount > 0) {
    console.error("\nSe encontraron errores de sintaxis en la entrada.");
  } else {
    console.log("\nEntrada válida.");

    console.log("\nTabla de tokens:");
    console.log("LEXEMA\t\tTOKEN");
    for (const token of tokenStream.tokens) {
      if (token.type !== -1) {
        const tokenName = parser.symbolicNames[token.type];
        console.log(`${token.text}\t\t${tokenName}`);
      }
    }
    console.log("\n");

    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log("\nArbol de derivación");
    console.log(`\n${cadena_tree}`);

    const visitor = new CustomPilaVisitor();
    const result = await visitor.visit(tree);

    console.log("\nCódigo traducido a JavaScript:");
    for (const linea of visitor.transpilado) {
      console.log(linea + "\n");
    }

    console.log(`\nResultado código JavaScript:`);
    console.log(`[${visitor.pila.join(", ")}]`);
  }
}

main();
