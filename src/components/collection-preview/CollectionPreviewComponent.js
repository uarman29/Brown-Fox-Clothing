import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItemComponent from '../collection-item/CollectionItemComponent';
import './CollectionPreviewComponent.css';

const CollectionPreviewComponent = ({title, items, history}) =>
{

    const renderItems = () =>
    {
        let preview = items
        .filter((item, idx) => idx < 4)
        .map((item) =>{
            return <CollectionItemComponent key={item.id} item={item} />;
        });
        return preview;
    };

    return(
        <div className="collection-preview">
            <h1 className="title" onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
            <div className="preview disable-scrollbars">
                {renderItems()}
            </div>
            <div>
                <span className="collection-see-more" onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>See more &#8658;</span>
            </div>
        </div>
    );
};

export default withRouter(CollectionPreviewComponent);