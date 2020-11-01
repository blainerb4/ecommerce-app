import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
     <h1 className='title'>{title.toUpperCase()}</h1>
     <div className='preview'>
        {items
        .filter((item, index)=> index < 4)
        .map((item) => (
            <CollectionItem key={item.id} item={item}/>
        ))}
     </div>
    </div>
)

//.map(({id, ...otherItemProps}) => (
//    <CollectionItem key={id} {...otherItemProps}/>

export default PreviewCollection