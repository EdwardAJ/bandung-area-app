import {MultiLineString, MultiPoint, MultiPolygon} from "geojson";

export const parseGeoJSON = (geoJSON: any): Array<MultiPolygon | MultiLineString | MultiPoint> => {
    const parsedGeoJSON: Array<MultiPolygon | MultiLineString | MultiPoint> = []
    const keys: Array<string> = Object.keys(geoJSON)
    for (let i: number = 0; i < keys.length; i += 1) {
        parsedGeoJSON.push(geoJSON[keys[i]].geomjson)
    }
    return parsedGeoJSON
}
