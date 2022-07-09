import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './auth/AuthProvider';
import Router from './routes/Router';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
