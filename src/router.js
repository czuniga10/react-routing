import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Store from '../src/components/Store/Store';
import Details from '../src/components/Details/Details';
import Checkout from '../src/components/Checkout/Checkout';

export default (
    <Switch>
        <Route component={ Store } path='/' exact />
        <Route component={ Details } path='/details/:id' />
        <Route component={ Checkout } path='/checkout' />
    </Switch>
)
