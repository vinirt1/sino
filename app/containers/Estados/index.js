import React, {
  Component
} from 'react';

import ListaDivider from '../../views/ListaDivider';
import Utils from '../../utils';
import estados from './listaEstados.json';

class EstadosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaEstados: Utils.listaPorLetraInicial(estados, 'nome'),
    }
  }

  _voltar = () => {
    this.props.navigation.goBack();
  }

  _selecionarEstado = (estado) => {
    alert(estado.nome);
    this._voltar();
  }

  render() {
    const { listaEstados } = this.state;
    
    return ( 
      <ListaDivider lista={ listaEstados } acao={this._selecionarEstado}/>
    );
  }
}

export default EstadosContainer;