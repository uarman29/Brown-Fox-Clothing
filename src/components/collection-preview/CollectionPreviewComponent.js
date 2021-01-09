import React from 'react';

import CollectionItemComponent from '../collection-item/CollectionItemComponent';
import './CollectionPreviewComponent.css';

const CollectionPreviewComponent = ({title, items}) =>
{

    const renderItems = () =>
    {
        return items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) =>{
            return <CollectionItemComponent key={id} {...otherItemProps} />;
        });
    };

    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {renderItems()}
            </div>
        </div>
    );
};

export default CollectionPreviewComponent;