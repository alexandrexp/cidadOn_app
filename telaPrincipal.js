import {
  HomeScreen,
  AgriculturaScreen,
  AmbienteScreen,
  CulturaScreen,
  EducacaoScreen,
  HabitacaoScreen,
  SaneamentoScreen,
  SaudeScreen,
  SegurancaScreen,
  SocialScreen,
  UrbanismoScreen,
} from './src/screens';
import {createAppContainer, createDrawerNavigation} from 'react-navigation';

const MyDrawerNavigator = createDrawerNavigation(
  {
    Home: HomeScreen,
    Agricultura: AgriculturaScreen,
    Ambiente: AmbienteScreen,
    Cultura: CulturaScreen,
    Educacao: EducacaoScreen,
    Habitacao: HabitacaoScreen,
    Saneamento: SaneamentoScreen,
    Saude: SaudeScreen,
    Seguranca: SegurancaScreen,
    Social: SocialScreen,
    Urbanismo: UrbanismoScreen,
  },
  {
    contentOptions: {
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 16,
      },
    },
  },
);

export default createAppContainer(MyDrawerNavigator);
