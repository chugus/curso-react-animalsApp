import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar"
import { AcuaticosScreen } from "../components/acuaticos/AcuaticosScreen";
import { TerrestresScreen } from "../components/terrestres/TerrestresScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { AnimalScreen } from "../components/animal/AnimalScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path="terrestres" element={<TerrestresScreen />} />
                    <Route path="acuaticos" element={<AcuaticosScreen />} />
                    <Route path="animal/:animalId" element={<AnimalScreen />} />

                    <Route path="busqueda" element={<SearchScreen />} />

                    <Route path="/" element={<TerrestresScreen />} />
                </Routes>
            </div>
        </>
    )
}
