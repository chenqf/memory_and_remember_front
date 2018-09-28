import React, { Component } from 'react';
import logo from './logo.svg';
import { TabBar} from 'antd-mobile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div style= { {position: 'fixed', height: '100%', width: '100%', top: 0 }}>
              <TabBar
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="white"
              >
                  <TabBar.Item
                      title="Life"
                      key="Life"
                      icon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                      />
                      }
                      selectedIcon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                      />
                      }
                      badge={1}
                      onPress={() => {
                          console.log(1111)
                      }}
                      data-seed="logId"
                  >
                      222222
                  </TabBar.Item>
                  <TabBar.Item
                      icon={
                          <div style={{
                              width: '22px',
                              height: '22px',
                              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                          />
                      }
                      selectedIcon={
                          <div style={{
                              width: '22px',
                              height: '22px',
                              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                          />
                      }
                      selected
                      title="Koubei"
                      key="Koubei"
                      badge={'new'}
                      onPress={() => {
                          console.log(333333)
                      }}
                      data-seed="logId1"
                  >
                      4444444
                  </TabBar.Item>
                  <TabBar.Item
                      icon={
                          <div style={{
                              width: '22px',
                              height: '22px',
                              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                          />
                      }
                      selectedIcon={
                          <div style={{
                              width: '22px',
                              height: '22px',
                              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                          />
                      }
                      selected
                      title="Friend"
                      key="Friend"
                      dot
                      onPress={() => {
                          console.log(555555)
                      }}
                  >
                      666666
                  </TabBar.Item>
                  <TabBar.Item
                      icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                      selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                      title="My"
                      key="my"
                      onPress={() => {
                          console.log(7777777)
                      }}
                  >
                      88888888
                  </TabBar.Item>
              </TabBar>
          </div>
      </div>
    );
  }
}

export default App;
