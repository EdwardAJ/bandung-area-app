import {Point, MultiPolygon} from "geojson";

export interface PlaceOfWorship {
    geomjson: Point,
    tipe: string
}

export interface SubDistrictDetail {
    [gID: string]: {
        geomjson: MultiPolygon,
        kecamatan: string,
        nama: string,
        sarana_ibadah: Array<PlaceOfWorship>,
    }
}

