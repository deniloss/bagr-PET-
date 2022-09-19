import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets";
import {Sidebar} from "widgets/Sidebar";


const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <div className='page-content'>
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;