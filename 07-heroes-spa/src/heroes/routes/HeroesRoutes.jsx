import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DCPage, HeroPage, MarverlPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarverlPage/>}/>
                <Route path="dc" element={<DCPage/>}/>
                <Route path="search" element={<SearchPage/>}/>
                <Route path="hero" element={<HeroPage/>}/>

                <Route path="/" element={<Navigate to="/marvel"/>}/>
            </Routes>
        </div>

    </>
  )
}
