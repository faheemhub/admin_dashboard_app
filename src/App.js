import {Space} from 'antd'
import './App.css';
import AppHeader from './components/AppHeader/index'
import SideMenu from './components/SideMenu/index'
import PageContent from './components/PageContent/index'
import AppFooter from './components/AppFooter/index'

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>
    </div>
  );
}

export default App;
