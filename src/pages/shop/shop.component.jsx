import React from 'react'
import Collections from './shop.data'

//component
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {

    const renderCollections = () => {
        return Collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
    }

    return (
        <div className="shop-page">
            {renderCollections()}
        </div>
    )
}

export default ShopPage
