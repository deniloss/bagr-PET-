import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum appRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<appRoutes, string> = {
  [appRoutes.MAIN]: '/',
  [appRoutes.ABOUT]: '/about'
}

export const RouteConfig: Record<appRoutes, RouteProps> = {
  [appRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [appRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
}