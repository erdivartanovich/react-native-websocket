import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { 
  Container, 
  Header,
  Body,
  Right,
  Title, 
  Button,
  Input,
  Item, 
  Text
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import io from 'socket.io-client'

export default class websocket_rn extends Component {
  constructor(props) {
    super(props)
    this.socket = io('http://10.0.3.2:3000')
    this.state = {
      connected: true,
      message: ''
    }
    this.props = {
      message: ''
    }
  }

  connectToServer() {
    this.socket.connect()
    this.setState({
      connected: true
    })
  }
  disconnectFromServer() {
    this.socket.disconnect()
    this.setState({
      connected: false
    })
  }
  render() {
    return (
      <Container style={{flex: 1}}>
        <Header>
          <Body>
              <Title>Realtime Chat</Title>
          </Body>
          <Right>
              <Button onPress={()=>{
                console.log(this.state)
                if(this.state.connected) {
                  this.disconnectFromServer()
                } else {
                  this.connectToServer()
                }
              }}>
                <Text>
                  {this.state.connected ? 'Disconnect': 'Connect'}
                </Text>
              </Button>
          </Right>
        </Header>
        <Row size={7}>
              <Text> {this.state.message} </Text>
        </Row>
        <Row size={4} style={{backgroundColor: 'silver'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Item regular>
                  <Input placeholder='Say something here' onChangeText={(msg) => {
                    this.props = {
                      message: msg
                    }
                  }}/>
                  <Button full primary onPress={()=>{
                    this.socket.emit('chat message', this.props.message)
                    this.setState({
                      message: this.props.message
                    })
                  }}>
                    <Text>send</Text>
                  </Button>
            </Item>
          </View>
        </Row>
      </Container>
    );
  }
}


AppRegistry.registerComponent('websocket_rn', () => websocket_rn);
