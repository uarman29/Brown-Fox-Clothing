import React from 'react';
import MenuItemComponent from '../menu-item/MenuItemComponent';
import directory_data from '../../directory_data';
import './DirectoryComponent.css';

class DirectoryComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            sections: directory_data
        };
    }

    renderSections()
    {
        return this.state.sections.map((section) =>{
            return <MenuItemComponent 
                        key={section.id} 
                        title={section.title.toUpperCase()} 
                        imageUrl={section.imageUrl} 
                        size={section.size}
                        linkUrl = {section.linkUrl}
                    />
        });
    }

    render()
    {
        return(
            <div className="directory-menu">
                {this.renderSections()}
            </div>
        );
    }
}

export default DirectoryComponent;