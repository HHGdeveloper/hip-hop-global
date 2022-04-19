import React, { Suspense } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import NotFound404 from '../NotFound404';
import menuItems from './assets/menuItems.js';
import logoImg from './assets/logo.gif';
import './Layout.scss';

const Layout = () => {
    const fallback = { fallback: '...loading' };

    const setActive = () => (match, location) => {
        if (match) {
            return true;
        }

        if (location.pathname === '/' || !location.pathname) {
            location.pathname = '/home';
        }
    };

    const renderMenu = menuItems.map((menuItem, index) => (
        <NavLink isActive={setActive()} key={index} to={menuItem.link}>
            {menuItem.text}
        </NavLink>
    ));

    const renderRoutes = menuItems.map((route, index) => {
        if (route.lazy) {
            const LazyComponent = React.lazy(() => import('../pages/' + route.lazy));

            return (
                <Route key={index} path={route.link}>
                    <Suspense {...fallback}>
                        <LazyComponent />
                    </Suspense>
                </Route>
            );
        }

        return null;
    });

    return (
        <Router>
            <div className="menu">
                <div className="logoWrapper">
                    <img alt="hip-hop global" src={logoImg} />
                </div>
                <ul className="listInline">{renderMenu}</ul>
            </div>
            <div className="mainContent">
                <Switch>
                    {renderRoutes}
                    <Route>{NotFound404}</Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Layout;
