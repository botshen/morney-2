import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import {Tag} from './views/Tag';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
  max-width: 520px;
  margin: 0 auto;
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route exact={true} path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact={true} path="/tags/:id">
                        <Tag/>
                    </Route>
                    <Route exact={true} path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>

    );
}

export default App;

