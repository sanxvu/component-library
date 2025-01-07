import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default function Card({
    icon = <FontAwesomeIcon icon={faInfo} />,
    iconColor = "#3F75FE",
    title,
    children
}) {

    return (
        <div className="card">
            <div className="card-icon" style={{backgroundColor: iconColor}}>
                {icon}
            </div>
            <div className="card-info">
                <p className="card-title">{title}</p>
                <p className="card-text">{children}</p>
            </div>
        </div >
    )
}