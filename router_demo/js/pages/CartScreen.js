import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MessageListScreen extends Component {
    static navigationOptions = {
        title: '购物车',
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> componentText </Text>
            </View>
        );
    }
}