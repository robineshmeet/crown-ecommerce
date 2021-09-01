import React from 'react'
import "./collection.preview.styles.scss"

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {

    const renderItems = () => {
        return items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => <CollectionItem key={id} {...itemProps} />)
    }

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {renderItems()}
            </div>
        </div>
    )
}

export default CollectionPreview
