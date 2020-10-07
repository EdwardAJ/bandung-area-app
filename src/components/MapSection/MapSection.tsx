import React, {useEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css'
import './MapSection.css'

import {LatLngTuple} from "leaflet"
import {Map, GeoJSON, TileLayer, Marker} from "react-leaflet"

import {getSubDistrictDetail} from "../../services/subDistrictDetail.services";
import { parsePlacesOfWorshipJSON } from "../../utils/subDistrictDetail.utils";

import {MultiPolygon, Point} from "geojson";

const initialCenter: LatLngTuple = [-6.914864, 107.608238]
const initialZoom: number = 12
const zoom: number = 15

type SearchSectionProps = {
    gID: string
}

const MapSection: React.FC<SearchSectionProps> = ({ gID }) => {
    const [center, setCenter] = useState<LatLngTuple>()
    const [subDistrictArea, setSubdistrictArea] = useState<MultiPolygon>()
    const [placesOfWorship, setPlacesOfWorship] = useState<Array<Point>>()

    useEffect(() => {
        if (gID) {
            getSubDistrictDetail(gID).then((response) => {
                if (response && response.data ) {
                    const { geomjson, sarana_ibadah } = response.data[gID]
                    setCenter([geomjson.coordinates[0][0][0][1], geomjson.coordinates[0][0][0][0]])
                    setPlacesOfWorship(parsePlacesOfWorshipJSON(sarana_ibadah) as Array<Point>)
                    setSubdistrictArea(geomjson)
                }
            })
        }
    }, [])

    return (
        <section className="flex">
            <Map id="mapId" center={center ? center : initialCenter} zoom={center ? zoom : initialZoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                </TileLayer>
                <GeoJSON
                    key={JSON.stringify(subDistrictArea)}
                    data={subDistrictArea as MultiPolygon}
                    style={{ color: 'green' }}
                />
                {
                    placesOfWorship && Object.values(placesOfWorship).length > 0 &&
                        Object.values(placesOfWorship).map((place) => (
                        <Marker position={[place.coordinates[1], place.coordinates[0]]} />
                    ))
                }
            </Map>
        </section>
    )
}

export default MapSection
