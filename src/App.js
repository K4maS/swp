import React from 'react';
import './css/style.css';
import Header from './modules/Header';
import MainList from './pages/MainList';
import FilmsList from './pages/FilmsList';
import FilmPage from './pages/FilmPage';
import { Routes, Route } from 'react-router-dom';
import { defaultPath, filmsPagePath, filmPagePath } from './components/paths';
import { getMainUrlAddresses } from './components/requests';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path={defaultPath} element={<MainList />}></Route>
          <Route path={filmsPagePath} element={<FilmsList />}></Route>
          <Route path={filmPagePath + '/:id'} element={<FilmPage />}></Route>
        </Routes>
      </div>

    );
  }

  getAddList() {
    return getMainUrlAddresses();
  }

}


