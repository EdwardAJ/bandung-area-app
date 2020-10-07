import React from 'react'
import './CardSearch.css'

type CardSearchProps = {
    isActive: boolean,
    subDistrict: string,
    district: string,
    onClick: Function
}
const CardSearch:React.FC<CardSearchProps> = ({ isActive, subDistrict, district, onClick }) => {
    return (
        <div
            className={isActive ? 'card-search active' : 'card-search inactive'}
            onClick={(e) => onClick(e)}
        >
            <p className="info"> Kelurahan </p>
            <p className="sub-district"> <b> {subDistrict} </b> </p>
            <p className="district"> Kecamatan <b> { district } </b> </p>
        </div>
    )
}

export default CardSearch
