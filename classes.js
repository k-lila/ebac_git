// Classe ---------------------------------
function RandomFactory() {
    this.piece = Math.random();
    this.product = function(num) {
        return Math.ceil(this.piece * num)
    };
    this.newpiece = function() {
        this.piece = Math.random();
    }
}
// Herança 1 -----------------------
function DiceRoller() {
    RandomFactory.call(this);
    let _faces = [];
    this.returnRolls = function() {
        return _faces
    }
    this.setRolls = function(listRolls) {
        _faces = listRolls;
        console.log(`Jogo de dados configurado: ${listRolls}\n`);
    }
    this.roll = function() {
        console.log('Dados lançados...');
        _faces.forEach((num, i) => {
        let result = this.product(num);
        console.log(`Dado ${i + 1}: ${result}`);
        this.newpiece();
        });
        return console.log()
    }
}
// Herança 2 -----------------------------------
function RandomSquare(range) {
    RandomFactory.call(this);
    this.size = this.product(range);
    this.string = function() {
        var stringShape = '';
        for (let i=0; i<this.size; i++) {
            var _stringShape = '* '.repeat(this.size);
            _stringShape = _stringShape.substring(0, _stringShape.length - 1) + '\n';
            stringShape += _stringShape;
        };
        return stringShape.substring(0, stringShape.length - 1)
    }
    this.show = function() {
        console.log(`\nTamanho: (${this.size}x${this.size})`);
        console.log(this.string() + '\n');
    }
}
// Polimorfismo ---------------------------------------------------------------------
function RandomTriangle(range) {
    RandomSquare.call(this, range);
    this.string = function() {
        var stringShape = '';
        for (i=0; i<this.size; i++) {
            var _stringShape = '* '.repeat(i + 1);
            _stringShape = _stringShape.substring(0, _stringShape.length - 1) + '\n';
            stringShape += _stringShape;
        }
        return stringShape.substring(0, stringShape.length - 1)
    }
}
// ----------------------------------------------------------------------------------
function show() {
    const classe = new RandomFactory();
    const heranca1 = new DiceRoller();
    const heranca2 = new RandomSquare(15);
    const polimorfismo = new RandomTriangle(15);
    // classe
    console.log('\n' + '#'.repeat(50));
    console.log('RandomFactory()'.padStart(50, '-') + '\n');
    console.log(`${classe.piece}`);
    console.log(`${classe.product(1)} | ${classe.product(10)} | ${classe.product(100)} |\n`);
    // heranca1
    console.log('DiceRoller()'.padStart(50, '-') + '\n');
    heranca1.setRolls([20, 20, 20, 20]);
    heranca1.roll();
    // heranca2
    console.log('RandomSquare()'.padStart(50, '-'));
    heranca2.show()
    // polimorfismo
    console.log('RandomTriangle()'.padStart(50, '-'));
    polimorfismo.show();
    console.log('#'.repeat(50) + '\n');
}
// --------------------------------------------------
show()