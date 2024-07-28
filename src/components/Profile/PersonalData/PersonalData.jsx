import React from "react";
import s from './PesonalData.module.css';

const PersonalData = () => {
    return (
        <div className={s.description_profile}>
            <p className={s.name}>
                Nikita
            </p>
            <p>Date of Birth: 27 october</p>
            <p>City: Tambov</p>
            <p>Education: </p>
            <p>Web site:</p>
        </div>
    )
}

export default PersonalData;