import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Testimonial({ image, speaker, location, children }) {
    return (
        <>
            {image ?
                <div className="testimonial-with-image">
                    <img src={image}></img>
                    <div className="testimonial-with-image-info">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h1>{children}</h1>
                        <p>{speaker}</p>
                        <span>{location}</span>
                    </div>
                </div>
                :
                <div className="testimonial-no-image">
                    <div className="testimonial-no-image-info">
                        <img src="./images/workcation-logo.png"></img>
                        <h1>{children}</h1>
                        <span>{speaker} / {location}</span>
                    </div>
                    <img src="./images/dot-pattern.png" className="dot-pattern"></img>
                </div>
            }
        </>
    )
}