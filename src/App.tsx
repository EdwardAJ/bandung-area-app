import React from 'react'
import 'leaflet/dist/leaflet.css'
import './App.css'
import MapSection from "./components/MapSection/MapSection"
import SearchSection from "./components/SearchSection/SearchSection";

const App:React.FC = () => {
    function handleOnDistrictClick (gID: string): void {
        console.log('dipanggil: ', gID)
    }

    return (
        <div className="flex">
            <MapSection />
            <SearchSection onDistrictClick={(gID: string) => handleOnDistrictClick(gID)}/>
        </div>
    )
}

export default App;
