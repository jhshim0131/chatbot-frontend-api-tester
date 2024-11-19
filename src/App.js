import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'; // 기본 페이지
import HospitalizationLivingTodayMeal from './components/HospitalizationLivingTodayMeal'; // API 호출 결과를 보여주는 페이지
import HospitalizationLivingTodayMealChange from './components/HospitalizationLivingTodayMealChange'; // API 호출 결과를 보여주는 페이지


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mock/lvng/meal" element={<HospitalizationLivingTodayMeal />} />
            <Route path="/mock/lvng/meal/change" element={<HospitalizationLivingTodayMealChange />} />
        </Routes>
    );
}

export default App;
