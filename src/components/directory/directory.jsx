import React from 'react'
import {connect} from 'react-redux'
import MenuItem from '../menu-item/menu-item'
import { createStructuredSelector } from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import './directory.scss'

//class component
//will need to store state value of menu items we need to pass and create
// menu items with


//class Directory extends React.Component {
  const Directory = ({sections}) => (
          <div className = 'directory-menu'>
          {
              sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps} />
              ))
          }
          </div>
      )


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

//this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
//  <MenuItem key={id} title ={title} imageUrl = {imageUrl} size={size} linkUrl={linkUrl}/>

export default connect(mapStateToProps)(Directory)