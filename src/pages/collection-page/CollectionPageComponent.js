import React from 'react';
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent';
import {shop_data} from '../../shop_data';

import './CollectionPageComponent.css';

const CollectionPageComponent = (props) =>
{
    const renderItems = () =>
    {
        const collection = shop_data.find(collection => collection.routeName === props.match.params.collectionId);
        return collection.items.map(item => {
            return <CollectionItemComponent key={item.id} item={item} />
        });
    }

    return(
        <div className="collection-page">
            <h1>{props.match.params.collectionId.toUpperCase()}</h1>
            <div className="collection-item-list">
                {renderItems()}
            </div>
        </div>
    );
}

export default CollectionPageComponent;