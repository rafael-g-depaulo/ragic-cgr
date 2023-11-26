import { UseRoutes, createRoutes } from 'ragic';

import MembersIndex from 'pages/MembersIndex';
import RegisterMember from 'pages/Register/Member';
import TeamsIndex from 'pages/TeamsIndex';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';

const routes = createRoutes()
  .path('/', { component: MembersIndex })
  .path('/register/member', { component: RegisterMember })
  .path('/login', { component: Login })
  .path('/signup', { component: SignUp })
  .path('/teams', { component: TeamsIndex });

export const {
  Link,
  Router,
} = UseRoutes(routes);
