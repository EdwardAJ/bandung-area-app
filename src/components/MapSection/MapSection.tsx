import React from 'react'
import 'leaflet/dist/leaflet.css'
import './MapSection.css'

import {LatLngTuple} from "leaflet"
import {Map, GeoJSON, TileLayer} from "react-leaflet"

import jsonFile from "../../test2.json"
import { parseGeoJSON } from "../../utils/geoJson.utils"

const latLng: LatLngTuple = [-6.914864, 107.608238]
const zoom: number = 12

const MapSection: React.FC = () => {
    return (
        <section className="flex">
            <Map id="mapId" center={latLng} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                </TileLayer>
                <GeoJSON data={parseGeoJSON(jsonFile)} style={{ color: 'green' }}/>
            </Map>
        </section>
    )
}

export default MapSection
