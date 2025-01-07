import React from "react"

const ThemeContext = React.createContext()
export { ThemeContext }

export default function ComponentLibrary({ children }) {
    const colors = {
        gray: {
            color: "#1F2937", backgroundColor: "#F3F4F6"
        },
        red: {
            color: "#991B1B", backgroundColor: "#FEE2E2"
        },
        yellow: {
            color: "#92400E", backgroundColor: "#FEF3C7"
        },
        green: {
            color: "#065F46", backgroundColor: "#D1FAE5"
        },
        blue: {
            color: "#1E40AF", backgroundColor: "#DBEAFE"
        },
        indigo: {
            color: "#3730A3", backgroundColor: "#E0E7FF"
        },
        purple: {
            color: "#5B21B6", backgroundColor: "#EDE9FE"
        },
        pink: {
            color: "#9D174D", backgroundColor: "#FCE7F3"
        }
    }
    return (
        <ThemeContext.Provider value={{ colors }}>
            {children}
        </ThemeContext.Provider>
    )
}