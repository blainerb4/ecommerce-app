import React from 'react'

import {connect} from 'react-redux'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

import {createStructuredSelector} from 'reselect'

import PreviewCollection from '../preview-collection/PreviewCollection'


import './CollectionsOverview.scss'

const CollectionsOverview = ({collections}) => (
    <div className= 'collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
//changed shopdata from array to object
export default connect(mapStateToProps)(CollectionsOverview)