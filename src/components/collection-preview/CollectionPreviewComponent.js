import React from 'react';

import CollectionItemComponent from '../collection-item/CollectionItemComponent';
import './CollectionPreviewComponent.css';

const CollectionPreviewComponent = ({title, items}) =>
{

    const renderItems = () =>
    {
        return items
        .filter((item, idx) => idx < 4)
        .map((item) =>{
            return <CollectionItemComponent key={item.id} item={item} />;
        });
    };

    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview disable-scrollbars">
                {renderItems()}
            </div>
        </div>
    );
};

export default CollectionPreviewComponent;