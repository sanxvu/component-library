import React from "react"

import { ThemeContext } from "./ComponentLibrary"

export default function Badge({
    children,
    color = "gray",
    shape = "square" }) {

    const { colors } = React.useContext(ThemeContext)
    
    return (
        <div className={`badge-${shape}`} style={colors[color]}>
            {children}
        </div >
    )
}