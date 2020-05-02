import { Home } from "../pages/Home";
import { PopupCallback } from "../pages/PopupCallback";

const routes = [
  {
    path: '/:locale/',
    exact: true,
    component: Home,
    status: 200,
  }, {
    path: '/:locale/popup',
    exact: true,
    component: PopupCallback,
    status: 200,
  }
]

export {
  routes
}
