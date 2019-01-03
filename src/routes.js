import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';

const createNavigator = (userLogged = false) => createAppContainer(createSwitchNavigator({
  Welcome,
  Repositories,
}, {
  initialRouteName: userLogged ? 'Repositories' : 'Welcome',
}));

export default createNavigator;
