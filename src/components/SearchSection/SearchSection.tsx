import React, {FormEvent, useEffect, useState} from 'react'
import { SubDistricts } from '../../interfaces/subDistricts.interfaces'
import './SearchSection.css'
import CardSearch from "./Card/CardSearch"
import { getAllSubDistricts, filterSubDistrictsByName} from '../../services/subDistricts.services'

type SearchSectionProps = {
    onDistrictClick: Function
}

const SearchSection: React.FC<SearchSectionProps> = ({ onDistrictClick }) => {
    const [activeGID, setActiveGID] = useState<string>()
    const [originalSubDistricts, setOriginalSubDistricts] = useState<SubDistricts>()
    const [subDistricts, setSubDistricts] = useState<SubDistricts>()

    useEffect(() => {
        getAllSubDistricts().then((response) => {
            if (response) {
                setOriginalSubDistricts(response.data)
                setSubDistricts(response.data)
            }
        })
    }, [])

    function handleOnInput (e: FormEvent<HTMLInputElement>): void {
        e.preventDefault()
        const filteredSubDistricts: SubDistricts = filterSubDistrictsByName(originalSubDistricts as SubDistricts, (e.target as HTMLTextAreaElement).value)
        setSubDistricts(filteredSubDistricts)
    }

    function handleOnClick(e: FormEvent<HTMLInputElement>, gID: string): void {
        e.preventDefault()
        setActiveGID(gID)
        onDistrictClick(gID)
    }

    return (
        <section className="search-section">
            <div className="app-info-and-search">
                <p className="app-title"> <b> Ibad</b>app </p>
                <p className="app-subtitle">
                    Kini, mencari tempat ibadah di Bandung lebih mudah!
                </p>
                <input
                    onInput={handleOnInput}
                    placeholder="Ketik nama kecamatan / kelurahan"/>
            </div>
            <div className="result">
                {
                    subDistricts && Object.keys(subDistricts).map((gID: string) => (
                        <CardSearch
                            onClick={(e: FormEvent<HTMLInputElement>) => handleOnClick(e, gID)}
                            isActive={gID === activeGID}
                            key={gID}
                            subDistrict={subDistricts[gID].kelurahan}
                            district={subDistricts[gID].kecamatan}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default SearchSection
