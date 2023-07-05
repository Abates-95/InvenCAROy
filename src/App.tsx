import{ BrowserRouter,  Routes, Route, } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import routes from './config/routes'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
              />
          )) }
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App
