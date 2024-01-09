import React from 'react';
<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import { Image, Layout, Menu, MenuProps } from 'antd';
import { HomeOutlined, HeartOutlined, LaptopOutlined } from '@ant-design/icons';

import profilePicture from './img/chang.png';

import './App.css';
import Sider from 'antd/es/layout/Sider';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'home',
    icon: <HomeOutlined />
  },
  {
    key: '2',
    label: 'projects',
    icon: <HeartOutlined />
  },
  {
    key: '3',
    label: 'blog',
    icon: <LaptopOutlined />
  },
];
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
          <Layout>
            <Sider>
      <Image
      src={profilePicture}
      alt="A picture of Chang holding icecream."
      width={100}
      height={100}
      style={{borderRadius: '50%', padding: "15px" }}
      />
      <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0, height:"100vh"}}
        />
       </Sider>
       </Layout>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
