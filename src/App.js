import react, {Component} from 'react';
import './App.css';
 import { Button, Form, FormGroup, Label, Input}
 from 'reactstrap';
import{GoogleLoginButton} from 'react-social-login-buttons';
class App extends Component {
  render() {
  return (
    <form className="App">
     <h1>Welcome</h1>
     <FormGroup className="email">
      <label>Email</label> <br></br> 
      <input type="email" placeholder="Email"/>
     </FormGroup>
     <FormGroup className="password">
      <label>Password</label> 
      <input type="password" placeholder="Password"/>
     </FormGroup>
     <Button className="btn-lg btn-dark btn-block">
       Log in
     </Button>
     <div>or continue with your social account</div>
   <GoogleLoginButton/>
   <div>
     <a href="/sign-up">sign-up</a>
     <span className="sp">|</span>
     <a href="/Forgot password">Forgot Password</a>
   </div>
   </form>
  );
}
}
export default App;