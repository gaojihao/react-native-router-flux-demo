import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import config from '../config';

export default class UserInfoScreen extends Component {
  static navigationOptions = {
    title: '用户信息',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity activeOpacity={1}>
          <View style={[styles.cell,{height:80}]}>
            <Text style={styles.noramlText}>头像</Text>
            <View style={styles.right}>
              <Image style={styles.headerImage} source={require('../../images/man.png')}/>
              <Image style={styles.arrow} source={require('../../images/arrow_right.png')}/>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.cell}>
            <Text style={styles.noramlText}>昵称</Text>
            <View style={styles.right}>
              <Text style={styles.smallText}>昵称</Text>
              <Image style={styles.arrow} source={require('../../images/arrow_right.png')}/>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.cell}>
            <Text style={styles.noramlText}>性别</Text>
            <View style={styles.right}>
              <Text style={styles.smallText}>性别</Text>
              <Image style={styles.arrow} source={require('../../images/arrow_right.png')}/>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.cell}>
            <Text style={styles.noramlText}>出生年月</Text>
            <View style={styles.right}>
              <Text style={styles.smallText}>出生年月</Text>
              <Image style={styles.arrow} source={require('../../images/arrow_right.png')}/>
            </View>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  cell:{
      height:54,
      paddingHorizontal:15,
      display:'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomColor:'#efefef',
      borderBottomWidth:config.onePix,
  },

  headerImage:{
    height:50,
    width:50,
  },

  arrow:{
    height:12,
    width:12,
    marginLeft:4,
  },

  right:{
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
  },

  noramlText:{
    fontSize:14,
    color:'#333333',
  },

  smallText:{
    color:'#666666',
    fontSize:13,
  },

})