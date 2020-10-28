import React from 'react'
import ShopData from './ShopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
//we need to store data related to actual collection of shop page
//we make a class component

class ShopPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            collections: ShopData
        };
    }
    render(){
        const {collections} = this.state
        return(
            <div className ='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage