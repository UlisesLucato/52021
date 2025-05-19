// Generated from c://Users//valle//Downloads//jocoputo//uligay//calculadorag4-modif//Pila.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PilaListener from './PilaListener.js';
import PilaVisitor from './PilaVisitor.js';

const serializedATN = [4,1,16,108,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,2,1,2,1,2,1,2,4,2,40,8,2,
11,2,12,2,41,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,3,4,52,8,4,1,5,1,5,1,5,1,5,
1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,
1,9,1,9,1,9,1,9,5,9,80,8,9,10,9,12,9,83,9,9,3,9,85,8,9,1,9,1,9,1,10,1,10,
3,10,91,8,10,1,11,4,11,94,8,11,11,11,12,11,95,1,12,4,12,99,8,12,11,12,12,
12,100,1,13,4,13,104,8,13,11,13,12,13,105,1,13,0,0,14,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,0,0,104,0,29,1,0,0,0,2,33,1,0,0,0,4,35,1,0,0,0,6,45,1,
0,0,0,8,51,1,0,0,0,10,53,1,0,0,0,12,59,1,0,0,0,14,64,1,0,0,0,16,69,1,0,0,
0,18,75,1,0,0,0,20,90,1,0,0,0,22,93,1,0,0,0,24,98,1,0,0,0,26,103,1,0,0,0,
28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,
1,1,0,0,0,33,34,3,4,2,0,34,3,1,0,0,0,35,36,5,9,0,0,36,37,3,6,3,0,37,39,5,
6,0,0,38,40,3,8,4,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,
0,0,42,43,1,0,0,0,43,44,5,7,0,0,44,5,1,0,0,0,45,46,5,15,0,0,46,7,1,0,0,0,
47,52,3,10,5,0,48,52,3,12,6,0,49,52,3,14,7,0,50,52,3,16,8,0,51,47,1,0,0,
0,51,48,1,0,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,9,1,0,0,0,53,54,5,13,0,0,
54,55,5,4,0,0,55,56,3,20,10,0,56,57,5,5,0,0,57,58,5,8,0,0,58,11,1,0,0,0,
59,60,5,12,0,0,60,61,5,4,0,0,61,62,5,5,0,0,62,63,5,8,0,0,63,13,1,0,0,0,64,
65,5,11,0,0,65,66,5,4,0,0,66,67,5,5,0,0,67,68,5,8,0,0,68,15,1,0,0,0,69,70,
5,10,0,0,70,71,5,4,0,0,71,72,3,18,9,0,72,73,5,5,0,0,73,74,5,8,0,0,74,17,
1,0,0,0,75,84,5,2,0,0,76,81,3,20,10,0,77,78,5,1,0,0,78,80,3,20,10,0,79,77,
1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,81,1,
0,0,0,84,76,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,5,3,0,0,87,19,1,0,
0,0,88,91,3,22,11,0,89,91,3,24,12,0,90,88,1,0,0,0,90,89,1,0,0,0,91,21,1,
0,0,0,92,94,3,26,13,0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,
0,0,0,96,23,1,0,0,0,97,99,5,15,0,0,98,97,1,0,0,0,99,100,1,0,0,0,100,98,1,
0,0,0,100,101,1,0,0,0,101,25,1,0,0,0,102,104,5,14,0,0,103,102,1,0,0,0,104,
105,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,27,1,0,0,0,9,31,41,51,81,
84,90,95,100,105];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PilaParser extends antlr4.Parser {

    static grammarFileName = "Pila.g4";
    static literalNames = [ null, "','", "'['", "']'", "'('", "')'", "'{'", 
                            "'}'", "'!'", "'pila'", "'crear'", "'mirar'", 
                            "'sacar'", "'empujar'" ];
    static symbolicNames = [ null, null, "ACOR", "CCOR", "APAR", "CPAR", 
                             "ALLAVES", "CLLAVES", "EXCLA", "PILA", "CREAR", 
                             "MIRAR", "SACAR", "EMPUJAR", "DIGITO", "PALABRA", 
                             "WS" ];
    static ruleNames = [ "prog", "stat", "sentencia_pila", "nombre", "operaciones", 
                         "push", "pop", "peek", "crear", "lista", "valor", 
                         "numero", "texto", "digito" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PilaParser.ruleNames;
        this.literalNames = PilaParser.literalNames;
        this.symbolicNames = PilaParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PilaParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.stat();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PilaParser.RULE_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.sentencia_pila();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia_pila() {
	    let localctx = new Sentencia_pilaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PilaParser.RULE_sentencia_pila);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(PilaParser.PILA);
	        this.state = 36;
	        this.nombre();
	        this.state = 37;
	        this.match(PilaParser.ALLAVES);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.operaciones();
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0));
	        this.state = 43;
	        this.match(PilaParser.CLLAVES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PilaParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(PilaParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operaciones() {
	    let localctx = new OperacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PilaParser.RULE_operaciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.state = 47;
	            this.push();
	            break;
	        case 12:
	            this.state = 48;
	            this.pop();
	            break;
	        case 11:
	            this.state = 49;
	            this.peek();
	            break;
	        case 10:
	            this.state = 50;
	            this.crear();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PilaParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(PilaParser.EMPUJAR);
	        this.state = 54;
	        this.match(PilaParser.APAR);
	        this.state = 55;
	        this.valor();
	        this.state = 56;
	        this.match(PilaParser.CPAR);
	        this.state = 57;
	        this.match(PilaParser.EXCLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PilaParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(PilaParser.SACAR);
	        this.state = 60;
	        this.match(PilaParser.APAR);
	        this.state = 61;
	        this.match(PilaParser.CPAR);
	        this.state = 62;
	        this.match(PilaParser.EXCLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PilaParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(PilaParser.MIRAR);
	        this.state = 65;
	        this.match(PilaParser.APAR);
	        this.state = 66;
	        this.match(PilaParser.CPAR);
	        this.state = 67;
	        this.match(PilaParser.EXCLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PilaParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(PilaParser.CREAR);
	        this.state = 70;
	        this.match(PilaParser.APAR);
	        this.state = 71;
	        this.lista();
	        this.state = 72;
	        this.match(PilaParser.CPAR);
	        this.state = 73;
	        this.match(PilaParser.EXCLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PilaParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(PilaParser.ACOR);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===15) {
	            this.state = 76;
	            this.valor();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 77;
	                this.match(PilaParser.T__0);
	                this.state = 78;
	                this.valor();
	                this.state = 83;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 86;
	        this.match(PilaParser.CCOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PilaParser.RULE_valor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 88;
	            this.numero();
	            break;
	        case 15:
	            this.state = 89;
	            this.texto();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PilaParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 92;
	            this.digito();
	            this.state = 95; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PilaParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 97;
	            this.match(PilaParser.PALABRA);
	            this.state = 100; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	digito() {
	    let localctx = new DigitoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PilaParser.RULE_digito);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 102;
	        		this.match(PilaParser.DIGITO);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 105; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PilaParser.EOF = antlr4.Token.EOF;
PilaParser.T__0 = 1;
PilaParser.ACOR = 2;
PilaParser.CCOR = 3;
PilaParser.APAR = 4;
PilaParser.CPAR = 5;
PilaParser.ALLAVES = 6;
PilaParser.CLLAVES = 7;
PilaParser.EXCLA = 8;
PilaParser.PILA = 9;
PilaParser.CREAR = 10;
PilaParser.MIRAR = 11;
PilaParser.SACAR = 12;
PilaParser.EMPUJAR = 13;
PilaParser.DIGITO = 14;
PilaParser.PALABRA = 15;
PilaParser.WS = 16;

PilaParser.RULE_prog = 0;
PilaParser.RULE_stat = 1;
PilaParser.RULE_sentencia_pila = 2;
PilaParser.RULE_nombre = 3;
PilaParser.RULE_operaciones = 4;
PilaParser.RULE_push = 5;
PilaParser.RULE_pop = 6;
PilaParser.RULE_peek = 7;
PilaParser.RULE_crear = 8;
PilaParser.RULE_lista = 9;
PilaParser.RULE_valor = 10;
PilaParser.RULE_numero = 11;
PilaParser.RULE_texto = 12;
PilaParser.RULE_digito = 13;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_stat;
    }

	sentencia_pila() {
	    return this.getTypedRuleContext(Sentencia_pilaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sentencia_pilaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_sentencia_pila;
    }

	PILA() {
	    return this.getToken(PilaParser.PILA, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	ALLAVES() {
	    return this.getToken(PilaParser.ALLAVES, 0);
	};

	CLLAVES() {
	    return this.getToken(PilaParser.CLLAVES, 0);
	};

	operaciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionesContext);
	    } else {
	        return this.getTypedRuleContext(OperacionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterSentencia_pila(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitSentencia_pila(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitSentencia_pila(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_nombre;
    }

	PALABRA() {
	    return this.getToken(PilaParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_operaciones;
    }

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterOperaciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitOperaciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitOperaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_push;
    }

	EMPUJAR() {
	    return this.getToken(PilaParser.EMPUJAR, 0);
	};

	APAR() {
	    return this.getToken(PilaParser.APAR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPAR() {
	    return this.getToken(PilaParser.CPAR, 0);
	};

	EXCLA() {
	    return this.getToken(PilaParser.EXCLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_pop;
    }

	SACAR() {
	    return this.getToken(PilaParser.SACAR, 0);
	};

	APAR() {
	    return this.getToken(PilaParser.APAR, 0);
	};

	CPAR() {
	    return this.getToken(PilaParser.CPAR, 0);
	};

	EXCLA() {
	    return this.getToken(PilaParser.EXCLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_peek;
    }

	MIRAR() {
	    return this.getToken(PilaParser.MIRAR, 0);
	};

	APAR() {
	    return this.getToken(PilaParser.APAR, 0);
	};

	CPAR() {
	    return this.getToken(PilaParser.CPAR, 0);
	};

	EXCLA() {
	    return this.getToken(PilaParser.EXCLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_crear;
    }

	CREAR() {
	    return this.getToken(PilaParser.CREAR, 0);
	};

	APAR() {
	    return this.getToken(PilaParser.APAR, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	CPAR() {
	    return this.getToken(PilaParser.CPAR, 0);
	};

	EXCLA() {
	    return this.getToken(PilaParser.EXCLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_lista;
    }

	ACOR() {
	    return this.getToken(PilaParser.ACOR, 0);
	};

	CCOR() {
	    return this.getToken(PilaParser.CCOR, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_numero;
    }

	digito = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitoContext);
	    } else {
	        return this.getTypedRuleContext(DigitoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_texto;
    }

	PALABRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PilaParser.PALABRA);
	    } else {
	        return this.getToken(PilaParser.PALABRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DigitoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_digito;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PilaParser.DIGITO);
	    } else {
	        return this.getToken(PilaParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterDigito(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitDigito(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitDigito(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PilaParser.ProgContext = ProgContext; 
PilaParser.StatContext = StatContext; 
PilaParser.Sentencia_pilaContext = Sentencia_pilaContext; 
PilaParser.NombreContext = NombreContext; 
PilaParser.OperacionesContext = OperacionesContext; 
PilaParser.PushContext = PushContext; 
PilaParser.PopContext = PopContext; 
PilaParser.PeekContext = PeekContext; 
PilaParser.CrearContext = CrearContext; 
PilaParser.ListaContext = ListaContext; 
PilaParser.ValorContext = ValorContext; 
PilaParser.NumeroContext = NumeroContext; 
PilaParser.TextoContext = TextoContext; 
PilaParser.DigitoContext = DigitoContext; 
