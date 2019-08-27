import React, {
  Component
} from 'react';

import Lista from '../../views/Lista';

import diasSemana from './listaDiasSemana.json';

class DiasSemanaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaDiasSemana: diasSemana,
    }
  }

  _voltar = (diaSemana) => {
    this.props.navigation.navigate('BuscaIgrejas', {diaSemana});
  }

  _selecionarDiaSemana = (diaSemana) => {
    alert(diaSemana.nome);
    this._voltar(diaSemana);
  }

  render() {
    const { listaDiasSemana } = this.state;

    return (
      <Lista lista={listaDiasSemana} acao={this._selecionarDiaSemana} />
    );
  }
}

export default DiasSemanaContainer;