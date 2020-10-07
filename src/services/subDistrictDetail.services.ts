import {AxiosResponse} from "axios";
import {SubDistrictDetail} from "../interfaces/subDistrictDetail.interfaces";
import {customAxios} from "../utils/axios.utils";

async function getSubDistrictDetail (gID: string): Promise<AxiosResponse<SubDistrictDetail> | void> {
    return await customAxios.get<SubDistrictDetail>(`/api/kelurahan?gID=${gID}`).catch((error) => {
        alert(error.message)
        console.error(error)
    })
}

export { getSubDistrictDetail }
