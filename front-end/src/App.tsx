import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => (
    <Router>
      <Routes>
      {routes.map((route, index) => (
            <Route 
              key={index}
              {...route} 
            />
            )
          )
      }
      </Routes>
    </Router>
    );

export default App;
