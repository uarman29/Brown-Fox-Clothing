import React from 'react';
import { connect } from 'react-redux';
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent';
import SpinnerComponent from '../../components/spinner/SpinnerComponent';

class ShopPageComponent extends React.Component
{
    renderCollections()
    {
        return Object.keys(this.props.shopData)
        .map(key =>{
            return <CollectionPreviewComponent key={this.props.shopData[key].id} {...this.props.shopData[key]} />;
        });
    }

    render()
    {
        return (this.props.isLoading ? (<SpinnerComponent />) :
        (
            <div className="shop-page">
                {this.renderCollections()}
            </div>
        ));
    }
}

const mapStateToProps = (state) =>
{
    return {isLoading:state.shop.isLoading, shopData: state.shop.data};
};

export default connect(mapStateToProps)(ShopPageComponent);