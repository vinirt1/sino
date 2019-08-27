import React, {
    Component
} from 'react';

import ListaDivider from '../../views/ListaDivider';
import Utils from '../../utils';

import igrejas from './listaIgrejas.json';

class ListaIgrejasContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listaIgrejas: Utils.listaPorLetraInicial(igrejas, 'nome'),
        }
    }

    _voltar = () => {
        this.props.navigation.goBack();
    }

    _selecionarIgreja = (igreja) => {
        this.props.navigation.navigate('IgrejaDetalhe', { igreja });
    }

    render() {
        const { listaIgrejas } = this.state;

        return ( 
            <ListaDivider lista={ listaIgrejas } acao={this._selecionarIgreja}/>
        );
    }
}

export default ListaIgrejasContainer;