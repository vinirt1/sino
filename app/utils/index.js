class Utils {
    static listaPorLetraInicial(listaEntrada, atributo) {
        const listaEntradaNomeTratado =
            listaEntrada
            .map(item => {
                return {
                    ...item,
                    [atributo]: item[atributo].replace('Paróquia ', ''),
                    header: false,
                }
            });

        const listaLetrasIniciais =
            listaEntradaNomeTratado
            .sort((a, b) => {
                if (a[atributo] > b[atributo]) {
                    return 1;
                }
                if (a[atributo] < b[atributo]) {
                    return -1;
                }
                return 0;
            })
            .filter((item, indice, listaEntradaOrdenada) => {
                let itemAnterior = {
                    [atributo]: 'A',
                };

                if (indice > 0) {
                    itemAnterior = listaEntradaOrdenada[indice - 1];
                }

                if ((itemAnterior[atributo].substring(0, 1) !== item[atributo].substring(0, 1)) ||
                    (indice === 0 && (itemAnterior[atributo].substring(0, 1) === item[atributo].substring(0, 1)))) {
                    return true;
                }
            })
            .map(itemLetraDistinta => {
                return {
                    header: true,
                    [atributo]: itemLetraDistinta[atributo].substring(0, 1),
                }
            });

        const listaConfigurada =
            listaEntradaNomeTratado
            .concat(listaLetrasIniciais)
            .sort((a, b) => {
                if (a[atributo] > b[atributo]) {
                    return 1;
                }
                if (a[atributo] < b[atributo]) {
                    return -1;
                }
                return 0;
            });

        return listaConfigurada;
    }
};

export default Utils;