import {Point} from "geojson"
import { PlaceOfWorship } from "../interfaces/subDistrictDetail.interfaces"

export const parsePlacesOfWorshipJSON = (rawJSONArray: Array<PlaceOfWorship>): Array<Point> => {
    const parsePlacesOfWorshipJSON: Array<Point> = []
    for (let i: number = 0; i < rawJSONArray.length; i += 1) {
        const { geomjson } = rawJSONArray[i]
        parsePlacesOfWorshipJSON.push(geomjson)
    }
    return parsePlacesOfWorshipJSON
}
