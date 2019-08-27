import BuscaIgrejas from '../containers/BuscaIgrejas';
import BuscaAvancadaIgrejas from '../containers/BuscaAvancadaIgrejas';
import DiasSemana from '../containers/DiasSemana';
import Horarios from '../containers/Horarios';
import Locais from '../containers/Locais';
import Estados from '../containers/Estados';
import Cidades from '../containers/Cidades';
import Bairros from '../containers/Bairros';
import ListaIgrejas from '../containers/ListaIgrejas';
import IgrejaDetalhe from '../containers/IgrejaDetalhe';

const Routes = {
    BuscaIgrejas: {
        id: 'BuscaIgrejas',
        name: 'Busca Igrejas',
        description: 'Tela para pesquisa de igrejas através de filtros',
        screen: BuscaIgrejas,
        navigationOptions: {
            header: null,
        },
    },
    BuscaAvancadaIgrejas: {
        id: 'BuscaAvancadaIgrejas',
        name: 'Busca Avançada Igrejas',
        description: 'Tela para pesquisa avançada de igrejas através de filtros',
        screen: BuscaAvancadaIgrejas,
        navigationOptions: {
            header: null,
        },
    },
    DiasSemana: {
        id: 'DiasSemana',
        name: 'Dias Semana',
        description: 'Relação de Dias da Semana  para compor a pesquisa de igrejas',
        screen: DiasSemana,
        navigationOptions: {
            header: null,
        },
    },
    Horarios: {
        id: 'Horarios',
        name: 'Horarios',
        description: 'Relação de Horarios para compor a pesquisa de igrejas',
        screen: Horarios,
        navigationOptions: {
            header: null,
        },
    },
    Locais: {
        id: 'Locais',
        name: 'Locais',
        description: 'Opções de local compor a pesquisa de igrejas',
        screen: Locais,
        navigationOptions: {
            header: null,
        },
    },
    Estados: {
        id: 'Estados',
        name: 'Estados',
        description: 'Relação de Estados da Federação para compor a pesquisa de igrejas',
        screen: Estados,
    },
    Cidades: {
        id: 'Cidades',
        name: 'Cidades',
        description: 'Relação de Cidades para compor a pesquisa de igrejas',
        screen: Cidades,
        navigationOptions: {
            header: null,
        },
    },
    Bairros: {
        id: 'Bairros',
        name: 'Bairros',
        description: 'Relação de Bairros para compor a pesquisa de igrejas',
        screen: Bairros,
        navigationOptions: {
            header: null,
        },
    },
    ListaIgrejas: {
        id: 'ListaIgrejas',
        name: 'Lista de Igrejas',
        description: 'Listas de igrejas correspondentes ao filtro informado',
        screen: ListaIgrejas,
        navigationOptions: {
            header: null,
        },
    },
    IgrejaDetalhe: {
        id: 'IgrejaDetalhe',
        name: 'Igreja Detalhe',
        description: 'Detalhe da Igreja selecionada',
        screen: IgrejaDetalhe,
        navigationOptions: {
            header: null,
        },
    },
}

export default Routes;