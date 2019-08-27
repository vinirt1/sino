import React, {
  Component
} from 'react';

import Lista from '../../views/Lista';

import locais from './listaLocais.json';

const PROXIMO_A_MIM = 1;

class LocaisContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaLocais: locais,
    }
  }

  _voltar = (local) => {
    this.props.navigation.navigate('BuscaIgrejas', { local });
  }

  _navegarPesquisaAvancada = () => {
    this.props.navigation.navigate('BuscaAvancadaIgrejas');
  }

  _selecionarLocal = (local) => {
    if (local.id === PROXIMO_A_MIM) {
      this._voltar(local);
    } else {
      this._navegarPesquisaAvancada();
    }
  }

  render() {
    const { listaLocais } = this.state;

    return ( 
      <Lista lista={ listaLocais } acao={ this._selecionarLocal }/>
    );
  }
}

export default LocaisContainer;