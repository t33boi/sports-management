import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TeamManagementPage from './pages/TeamManagementPage';
import PlayerManagementPage from './pages/PlayerManagementPage';
import MatchManagementPage from './pages/MatchManagementPage';
import StatisticsPage from './pages/StatisticsPage';
import ReportsPage from './pages/ReportsPage';
import BasePage from './pages/BasePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage/>}>
          <Route index element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<RegisterPage/>} />
          <Route path="teams" element={<TeamManagementPage/>} />
          <Route path="players" element={<PlayerManagementPage/>} />
          <Route path="matches" element={<MatchManagementPage/>} />
          <Route path="statistics" element={<StatisticsPage/>} />
          <Route path="reports" element={<ReportsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
