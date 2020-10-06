import React from 'react'
import './SearchSection.css'
import CardSearch from "./Card/CardSearch";

const SearchSection: React.FC = () => {
    return (
        <section className="search-section">
            <div className="app-info-and-search">
                <p className="app-title"> <b> Ibad</b>app </p>
                <p className="app-subtitle">
                    Kini, mencari tempat ibadah di Bandung lebih mudah!
                </p>
                <input placeholder="Ketik nama kecamatan / kelurahan"/>
            </div>
            <div className="result">
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
                <CardSearch subDistrict="Hegarmanah" district="Cidadap" />
            </div>
        </section>
    )
}

export default SearchSection
