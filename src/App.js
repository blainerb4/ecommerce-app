import React from 'react'
import { setCurrentUser } from './redux/user/user.action'
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'
import CheckoutPage from './pages/checkout/checkout'
import Header from './components/header/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument  } from './firebase/firebase'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'

class App extends React.Component {
   unsubscribeFromAuth = null

  componentDidMount (){
    const { setCurrentUser } = this.props


    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
          });
        } else{
          setCurrentUser(userAuth)
        }
    });
  }


componentWillUnmount () {
  this.unsubscribeFromAuth();
}
    render() {
    return (
      <div>
        <Header />
      <Switch>
      <Route exact path='/' component = {HomePage}/>
      <Route path='/shop' component = {ShopPage} />
      <Route exact path='/checkout' component = {CheckoutPage} />
      <Route 
      exact 
      path='/signin' 
      render = {() => this.props.currentUser ? (<Redirect to= '/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
      </div>
    );
  }
}
// render javascript invocation that determines what component to return
//in the same place where component would be
// if currentuser is present, redirect to homepage if not redirect to signinandsignupage
// because we do not want the user to stay on signinsignupage
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//const mapStateToProps = ({ user }) => ({
//  currentUser: user.currentUser
//})

// null because we dont need mapstatetoprops cos app doesnt need current user anymore
//outside of passing into header doesnt do anything with currentuser
//props that we pass in to whatever dispatch wants to pass (currentuser)
//<Header currentUser={this.state.currentUser}/>
// we have to store the user data in the state of our application
// so we can use it in our app
//document Snapshot allows us to check if document exists
/*
const HatsDetails = props => (
  <div>
  <h1>hats details {props.match.params.hatsId}</h1>
  </div>
)
//      <Route path='/hats/:hatsId' component = {HatsDetails} />
between hatspage div below
 // <Link to={`${props.match.url}/13`}>to topic 13</Link>
 // <Link to={`${props.match.url}/100`}> to topic 100</Link>*/


//so our app knows changes are being made (users being added via google sign up)
//when a user logins we want to store it on the app state so we can
//pass it into components that need it (we want access curent user object)
//throughout the app we change function app to class app ext


//how we fetch data before we fire fetch from backend (only one off)
// wont call fetch until componentdidmount gets called again
//we want to know when firebase realize authentication state change
//without having to manually fetch
//takes function where parameter is what the user state is of the auth
//oauth allows users to sign in with any third party service user already has


 //open subscription above (auth state has changed)
//closes to sub subscription with function
//how we handle our application being aware of any auth changes on firebase
/*
constructor(){
  super();

  this.state = {
    currentUser: null
  }
}

userRef.onSnapshot(snapShot => {
            this.setState ({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
        //if user object is null we call this set state 
      //     createUserProfileDocument(user);
//      this.setState({ currentUser: user })

      <Route exact path='/signin' component = {SignInAndSignUpPage} />

*/