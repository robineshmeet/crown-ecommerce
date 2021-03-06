import React from 'react';
import { useHistory } from "react-router-dom"
import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const { push } = useHistory()
    return (
        <div className={`${size} menu-item`} onClick={() => push(`/${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
