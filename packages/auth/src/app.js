import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
const generateClassName = createGenerateClassName({productionPrefix:'au'});
export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter >
     <Switch>
       <Route path="/auth/signin" component={SignIn} />
       <Route path="/auth/signup" component={SignUp} />
     </Switch>
     <Link to="/auth/signin">
                    <Button variant="contained" color="primary">
                      SignIn
                    </Button>
                  </Link>
                  <Link to="/auth/signup">
                    <Button variant="contained" color="primary">
                      SignUp
                    </Button>
                  </Link>
     </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
