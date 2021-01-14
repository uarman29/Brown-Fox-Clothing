import React from 'react';
import { connect } from 'react-redux';
import MenuItemComponent from '../menu-item/MenuItemComponent';
import SpinnerComponent from '../spinner/SpinnerComponent';
import './DirectoryComponent.css';


class DirectoryComponent extends React.Component
{
    renderSections()
    {
        return Object.values(this.props.shopData).map((section) =>{
            return <MenuItemComponent 
                        key={section.id} 
                        title={section.title.toUpperCase()} 
                        imageUrl={section.imageUrl} 
                        size={section.size}
                        linkUrl = {section.id}
                    />
        });
    }

    render()
    {
        return(this.props.isLoading ? (<SpinnerComponent />) :(
            <div className="directory-menu">
                {this.renderSections()}
            </div>
        ));
    }
}

const mapStateToProps = (state) =>
{
    return {isLoading:state.shop.isLoading, shopData: state.shop.data};
};

export default connect(mapStateToProps)(DirectoryComponent);