import { Home } from "../pages/Home";

const routes = [
  {
    path: '/:locale/',
    exact: true,
    component: Home,
    status: 200,
  }
]

export {
  routes
}
