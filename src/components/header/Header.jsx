import React from 'react';
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import {signOutStart} from '../../redux/user/user.action'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles'
import './Header.scss';



const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
        <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink to='/contact'>
            CONTACT
        </OptionLink>
        {
            currentUser ?
            <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }  
    </HeaderContainer>
)
//            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>

//if hidden is true we want to render nothing if not then render cart dropdown component
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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