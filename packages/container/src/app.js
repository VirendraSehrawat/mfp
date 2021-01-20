import React ,{ lazy, Suspense} from "react";
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/progress';

const MarketingLazy = lazy(() => { return  import('./components/MarketingApp')});
const AuthLazy = lazy(()=>{ return import('./components/AuthApp') } );
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<Progress />} >
        <Switch>
          <Route path="/auth" component={AuthLazy} />
          <Route path="" component={MarketingLazy} />
        </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
