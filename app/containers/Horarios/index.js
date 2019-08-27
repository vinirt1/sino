import React, {
  Component
} from 'react';

import Lista from '../../views/Lista';

import horarios from './listaHorarios.json';

class DiasSemanaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaHorarios: horarios,
    }
  }

  _voltar = () => {
    this.props.navigation.goBack();
  }

  _selecionarHorario = (horario) => {
    alert(horario.nome);
    this._voltar();
  }

  render() {
    const { listaHorarios } = this.state;

    return ( 
      <Lista lista={listaHorarios} acao={this._selecionarHorario}/>
    );
  }
}

export default DiasSemanaContainer;