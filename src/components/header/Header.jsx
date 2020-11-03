import React from 'react';
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import './Header.scss';



const Header = ({ currentUser, hidden }) => (
    <div className= 'header'>
        <Link className='logo-container' to='/'>
        <Logo className='logo'/>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }  
    </div>
)
//if hidden is true we want to render nothing if not then render cart dropdown component
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

//const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
 //   currentUser,
 //   hidden
//})

//const mapStateToProps = state => ({
 //   currentUser: selectCurrentUser(state),
//    hidden: selectCartHidden(state)
//})

//destructure: off of our state we want the user
// we use this when we want to destrucutre nested values
// we want to get the currentuser value off the user which is being
//destructured off the state

//const mapStateToProps = state => ({
 //   currentUser: state.user.currentUser,
 //       hidden: state.cart.hidden
//})

//function that allows us to access the state (the root reducer)
// state is the root reducer and passing in currentuser
//mapstatetoprops and connect below anywhere we need properties from reducers


//svg icon scalable vector graphic really performant
//{ReactComponent as Logo} special syntax for importing svg
//functional component
//our header component is getting currentuser from app.js
//we want header component to pull current user value from reducer
//connect is a higher order component lets us access things for redux

//const mapStateToProps = state => ({
 //   currentUser: state.user.currentUser,
 //       hidden: state.cart.hidden
//})