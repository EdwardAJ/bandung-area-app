import React from 'react'
import './CardSearch.css'

type CardSearchProps = {
    subDistrict: string,
    district: string
}
const CardSearch:React.FC<CardSearchProps> = ({ subDistrict, district }) => {
    return (
        <div className="card-search">
            <p className="info"> Kelurahan </p>
            <p className="sub-district"> <b> {subDistrict} </b> </p>
            <p className="district"> Kecamatan <b> { district } </b> </p>
        </div>
    )
}

export default CardSearch
