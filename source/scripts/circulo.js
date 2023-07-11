function printCircle(raio, vazado = false) {
    var size = (raio * 2) + 3;
    var circle = '';
    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            var distancia_euclid = Math.sqrt(Math.pow(y - (raio + 1), 2) + Math.pow(x - (raio + 1), 2)) <= raio;
            if (distancia_euclid) {
                if (vazado) {
                    circle += '  ';
                } else {
                    circle += '**';
                };
            } else {
                if (vazado) {
                    circle += '##';
                } else {
                    circle += '  ';
                };
            };
        };
        circle += '\n';
    };
    return circle
};

module.exports = printCircle;
