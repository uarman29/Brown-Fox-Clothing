import React from 'react';
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent';
import SpinnerComponent from '../../components/spinner/SpinnerComponent';
import { connect } from 'react-redux';

import './CollectionPageComponent.css';

const CollectionPageComponent = (props) =>
{
    const renderItems = () =>
    {
        const collection = props.shopData[props.match.params.collectionId];
        return collection.items.map(item => {
            return <CollectionItemComponent key={item.id} item={item} />
        });
    }

    return (props.isLoading ? (<SpinnerComponent />) :
    (
        <div className="collection-page">
            <h1>{props.match.params.collectionId.toUpperCase()}</h1>
            <div className="collection-item-list">
                {renderItems()}
            </div>
        </div>
    ));
}

const mapStateToProps = (state) =>
{
    return {isLoading: state.shop.isLoading, shopData: state.shop.data};
};

export default connect(mapStateToProps)(CollectionPageComponent);