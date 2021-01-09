import React from 'react';
import {shop_data} from '../../shop_data';
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent';

class ShopPageComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {collections: shop_data};
    }

    renderCollections()
    {
        return this.state.collections
        .map(({id, ...otherCollectionProps}) =>{
            return <CollectionPreviewComponent key={id} {...otherCollectionProps} />;
        });
    }

    render()
    {
        return(
            <div className="shop-page">
                {this.renderCollections()}
            </div>
        );
    }
}

export default ShopPageComponent;