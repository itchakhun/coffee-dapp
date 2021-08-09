import 'antd/dist/antd.css';
import './App.css';

import { Affix, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Redirect, Route, Router, Switch, useHistory } from 'react-router-dom';

import { IconFileEdit, IconSearch, IconTransaction, IconTree } from './Icons';
import Products from './pages/products';

const { Sider, Content } = Layout;

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <Layout className="site-layout-background">
        <Sider className="site-layout-background" width={200}>
          <Affix>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100vh' }}>
              <Menu.Item key="1" icon={<IconTree />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<IconFileEdit />}>
                <Link to="/batches">Batches</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<IconTransaction />}>
                Transactions
              </Menu.Item>
              <Menu.Item key="4" icon={<IconSearch />}>
                Tracing
              </Menu.Item>
            </Menu>
          </Affix>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: '100vh' }}>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/products">Batches</Route>
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
