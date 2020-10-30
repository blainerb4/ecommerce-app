import React from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'
import Header from './components/header/Header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'
import { Switch, Route} from 'react-router-dom'
import { auth, createUserProfileDocument  } from './firebase/firebase'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount (){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState ({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        } else {
          this.setState({ currentUser: userAuth })
        }
        //if user object is null we call this set state 
      //     createUserProfileDocument(user);
//      this.setState({ currentUser: user })
    });
  }


componentWillUnmount () {
  this.unsubscribeFromAuth();
}
    render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component = {HomePage}/>
      <Route path='/shop' component = {ShopPage} />
      <Route path='/signin' component = {SignInAndSignUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
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