import React, {
  Component
} from 'react';

import BuscaIgrejas from '../../views/BuscaIgrejas';

class BuscaIgrejasContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dadosFiltro: {
        local: {
          nome: 'Próximo a mim',
        },
        diaSemana: {
          nome: '',
        },
        horario: {
          nome: '',
        },
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);

    return {};
  }

  _navegarSeletorFiltro = (filtro) => {
    this.props.navigation.navigate(filtro);
  }

  _buscarIgrejas = () => {
    this.props.navigation.navigate('ListaIgrejas');
  }

  render() {
    return (
      <BuscaIgrejas 
        dadosFiltro={this.state.dadosFiltro}
        navegarFiltro={this._navegarSeletorFiltro}
        buscarIgrejas={this._buscarIgrejas}
      />
    );
  }
}

export default BuscaIgrejasContainer;