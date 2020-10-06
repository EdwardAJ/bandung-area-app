import React from 'react'
import 'leaflet/dist/leaflet.css'
import './App.css'
import MapSection from "./components/MapSection/MapSection"
import SearchSection from "./components/SearchSection/SearchSection";

const App:React.FC = () => {
    return (
        <div className="flex">
            <MapSection />
            <SearchSection />
        </div>
    )
}

export default App;
