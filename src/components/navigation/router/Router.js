import { Route, Switch } from 'react-router-dom';
import Header from 'components/common/header';
import Company from 'components/pages/company';
import NotFound from 'components/pages/notFound';
import Home from 'components/pages/home';

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company/:symbol" component={Company} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Router;
