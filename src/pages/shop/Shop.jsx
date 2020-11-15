import React from 'react'
//import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'

import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
//import CollectionPage from '../collection/collection'
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
//import { updateCollections } from '../../redux/shop/shop.action'
//import { createStructuredSelector } from 'reselect'
//import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action'
import { fetchCollectionsStart } from '../../redux/shop/shop.action'

//import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
//selectIsCollectionFetching,
//import WithSpinner from '../../components/with-spinner/with-spinner.components'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

//import {connect} from 'react-redux'
//import {createStructuredSelector} from 'reselect'
//import SHOP_DATA from '../../redux/shop/ShopData'
//import PreviewCollection from '../../components/preview-collection/PreviewCollection'
//import {selectCollections} from '../../redux/shop/shop.selectors'
//we need to unsubscribe whenever we unmount
//set loading value in component state
// levergage state value cos in class component
//component true where we need to know if loading is true or false is route tree
//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render(){
        const { match } = this.props;
        //isCollectionsLoaded
        //isCollectionFetching,
        return (
            <div className ='shop-page'>
                <Route 
                exact 
                path= {`${match.path}`} 
                component= {CollectionsOverviewContainer}
                //render={props => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)}
                
                />
                <Route 
                path = {`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
              //  render={props => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />)}
              />
            </div>
        )
    }
} 
//shoppage nested in a route in app.js

//const mapStateToProps = createStructuredSelector({
 //   isCollectionFetching: selectIsCollectionFetching,
 //   isCollectionsLoaded: selectIsCollectionsLoaded
//})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch (fetchCollectionsStart())
})

export default connect (null, mapDispatchToProps)(ShopPage)
//export default connect(mapStateToProps)(ShopPage)
//null,
//<Route exact path= {`${match.path}`} component= {CollectionsOverview} />
//                <Route path = {`${match.path}/:categoryId`} component={CollectionPage}/>
//        const {loading} = this.state;

//const mapDispatchToProps = dispatch => ({
 //   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
//})
//we need to store data related to actual collection of shop page
//we make a class component
/*

    fetch('https://firestore.googleapis.com/v1/projects/ecommerce-app-2dccc/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log(collections))

                render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)}/>
                render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)}/>


 this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });



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



const ShopPage = ({ match }) => (
    <div className ='shop-page'>
            <Route exact path= {`${match.path}`} component= {CollectionsOverview} />
            <Route path = {`${match.path}/:categoryId`} component={CollectionPage}/>
            </div>
)


    state = {
       loading: true
    };
    unsubscribeFromSnapshot = null;

componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }


*/