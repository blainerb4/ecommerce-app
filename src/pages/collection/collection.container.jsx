import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import {WithSpinner} from '../../components/with-spinner/with-spinner.components'

import CollectionPage from './collection'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

//we need to inverse the value we pass into isLoading

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionPage)

export default CollectionPageContainer

//containers dont render anyhting they just pass props down to compoentns
