import React from 'react'
import 'leaflet/dist/leaflet.css'
import './App.css'
import MapSection from "./components/MapSection/MapSection";

const App:React.FC = () => {
    return (
        <div className="flex">
            <MapSection />
        </div>
    )
}

export default App;
