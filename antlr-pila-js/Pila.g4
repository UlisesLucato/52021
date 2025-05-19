grammar Pila;

prog: stat+;

stat: sentencia_pila;

sentencia_pila: PILA nombre ALLAVES operaciones+ CLLAVES;
nombre: PALABRA;

operaciones:(push | pop | peek | crear);

push: EMPUJAR APAR valor CPAR EXCLA;
pop: SACAR APAR CPAR EXCLA;
peek: MIRAR APAR CPAR EXCLA;
crear: CREAR APAR lista CPAR EXCLA;
lista: ACOR (valor (',' valor)*)? CCOR;
valor: (numero | texto);

numero: digito+;
texto: PALABRA+;



digito: DIGITO+;

ACOR: '[';
CCOR: ']';
APAR: '(';
CPAR: ')';
ALLAVES: '{';
CLLAVES: '}';
EXCLA: '!';
PILA: 'pila';
CREAR: 'crear';
MIRAR: 'mirar';
SACAR: 'sacar';
EMPUJAR: 'empujar';
DIGITO: [0-9]+;
PALABRA:[a-zA-Z_]+;
WS: [ \t\r\n] -> skip;