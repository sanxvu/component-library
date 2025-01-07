import React from "react"

import { ThemeContext } from "./ComponentLibrary"

export default function Banner({status, title="Status Update", children }) {

    const { colors } = React.useContext(ThemeContext)

    let color = ""
    
    if (status === "neutral") color = "blue"
    if (status === "success") color = "green"
    if (status === "warning") color = "yellow"
    if (status === "error") color = "red"

    return (
        <div className="banner" style={colors[color]}>
            <img className="banner-icon" src={`./icons/${status}.png`} alt="banner icon"></img>
            <p className="banner-title">{title}</p>
            {children && <p className="banner-text">{children}</p>}
        </div >
    )
}