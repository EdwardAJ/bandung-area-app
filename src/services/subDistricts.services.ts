import {SubDistricts} from '../interfaces/subDistricts.interfaces'
import { AxiosResponse } from 'axios'
import {customAxios} from '../utils/axios.utils'

async function getAllSubDistricts (): Promise<AxiosResponse<SubDistricts> | void> {
    return await customAxios.get<SubDistricts>('/api/data').catch((error) => {
        alert(error.message)
        console.error(error)
    })
}

function filterSubDistrictsByName(subDistricts: SubDistricts, keyword: string): SubDistricts {
    let filteredSubDistricts: SubDistricts = {}
    Object.keys(subDistricts).map((gID: string) => {
        const { kecamatan, kelurahan } = subDistricts[gID]

        if (kecamatan.toLowerCase().includes(keyword.toLowerCase()) ||
            kelurahan.toLowerCase().includes(keyword.toLowerCase())) {
            filteredSubDistricts[gID] = subDistricts[gID]
        }
    })
    return filteredSubDistricts
}

export { getAllSubDistricts, filterSubDistrictsByName }
