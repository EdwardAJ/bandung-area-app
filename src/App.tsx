import React, {useState} from 'react'
import 'leaflet/dist/leaflet.css'
import './App.css'
import MapSection from "./components/MapSection/MapSection"
import SearchSection from "./components/SearchSection/SearchSection";

const App:React.FC = () => {
    const [ gID, setGID ] = useState<string>()

    function handleOnDistrictClick (gID: string): void {
        setGID(gID)
    }

    return (
        <div className="flex">
            <MapSection key={gID} gID={gID as string}/>
            <SearchSection onDistrictClick={(gID: string) => handleOnDistrictClick(gID)}/>
        </div>
    )
}

export default App;
