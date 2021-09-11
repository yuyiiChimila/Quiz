import React from 'react';
import { Route,Switch} from 'react-router-dom';
import QuizForm from './QuizForm'
import QuizApi from './QuizApi';

export default function Routes(){
  return( 
    <Switch>
      <Route path="/2">
        <QuizApi></QuizApi>
      </Route>
      <Route path="/">
        <QuizForm></QuizForm>
      </Route>
    </Switch>
  )
}