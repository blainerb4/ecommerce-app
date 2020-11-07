import React from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection'
//import {connect} from 'react-redux'
//import {createStructuredSelector} from 'reselect'
//import SHOP_DATA from '../../redux/shop/ShopData'
//import PreviewCollection from '../../components/preview-collection/PreviewCollection'
//import {selectCollections} from '../../redux/shop/shop.selectors'

const ShopPage = ({ match }) => (
    <div className ='shop-page'>
            <Route exact path= {`${match.path}`} component= {CollectionsOverview} />
            <Route path = {`${match.path}/:categoryId`} component={CollectionPage}/>
            </div>
)
//shoppage nested in a route in app.js

export default ShopPage
//export default connect(mapStateToProps)(ShopPage)


//we need to store data related to actual collection of shop page
//we make a class component
/*
constructor (props) {
    super(props);

    this.state = {
        collections: SHOP_DATA
    };
    render(){
        const {collections} = this.state
        return(
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

{collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}

*/