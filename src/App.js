import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './screen/MainScreen';
import LoginScreen from './screen/LoginScreen';
import GuideScreen from './screen/GuideScreen';
import HomepageScreen from './screen/HomepageScreen';
import ArticleScreen from './screen/ArticleScreen';
import IntroScreen from './screen/IntroScreen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/guide" element={<GuideScreen/>}/>
          <Route path="/myhomepage" element={<HomepageScreen/>}/>
          <Route path="/article" element={<ArticleScreen/>}/>
          <Route path="/intro" element={<IntroScreen/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
