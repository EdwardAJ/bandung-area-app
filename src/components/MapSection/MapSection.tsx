import React, {useEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css'
import './MapSection.css'

import {LatLngTuple} from "leaflet"
import { divIcon } from "leaflet";
import {Map, GeoJSON, TileLayer, Marker, Tooltip} from "react-leaflet"

import {getSubDistrictDetail} from "../../services/subDistrictDetail.services";
import { getIconClassName } from "../../utils/subDistrictDetail.utils";
import { PlaceOfWorship } from "../../interfaces/subDistrictDetail.interfaces";

import {MultiPolygon} from "geojson";

const initialCenter: LatLngTuple = [-6.914864, 107.608238]
const initialZoom: number = 12
const zoom: number = 15

type SearchSectionProps = {
    gID: string
}

const MapSection: React.FC<SearchSectionProps> = ({ gID }) => {
    const [center, setCenter] = useState<LatLngTuple>()
    const [subDistrictName, setSubDistrictName] = useState<string>()
    const [subDistrictArea, setSubDistrictArea] = useState<MultiPolygon>()
    const [placesOfWorship, setPlacesOfWorship] = useState<Array<PlaceOfWorship>>()

    useEffect(() => {
        if (gID) {
            getSubDistrictDetail(gID).then((response) => {
                if (response && response.data ) {
                    const { nama, geomjson, sarana_ibadah } = response.data[gID]
                    setCenter([geomjson.coordinates[0][0][0][1], geomjson.coordinates[0][0][0][0]])
                    setPlacesOfWorship(sarana_ibadah)
                    setSubDistrictArea(geomjson)
                    setSubDistrictName(nama)
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
                >
                    <Tooltip>
                        <p> { subDistrictName } </p>
                    </Tooltip>
                </GeoJSON>
                {
                    placesOfWorship && Object.values(placesOfWorship).length > 0 &&
                        Object.values(placesOfWorship).map((place) => (
                        <Marker
                            icon={divIcon({
                                className: getIconClassName(place.tipe)
                            })}
                            position={[place.geomjson.coordinates[1], place.geomjson.coordinates[0]]}
                        >
                            <Tooltip>
                                <p> <b> { place.tipe } </b> </p>
                                <p> {place.geomjson.coordinates[1]}, {place.geomjson.coordinates[0]} </p>
                            </Tooltip>
                        </Marker>
                    ))
                }
            </Map>
        </section>
    )
}

export default MapSection
