import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ToastAndroid,Platform} from 'react-native';
import config from '../config';

export default class UpdatePWDScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPwd:'',
      newPwd:'',
      newPwdRe:'',
    };
  }

  _modifyPWD(){
    if (this.state.newPwd != this.state.newPwdRe){
        this._toast('新密码两次输入不一致',1);
    }
}

  _toast(message, duration){
}

  render() {
    let active = (this.state.oldPwd.length >= 6 &&
      this.state.newPwd.length >= 6 &&
      this.state.newPwdRe.length >= 6)? true:false;
    return (
      <View style={config.viewContainer}>
                <View style={styles.lineViewStyle}>
                    <Text style={styles.textStyle}>原密码</Text>
                    <TextInput
                        style={styles.inputStyle}
                        defaultValue = {this.state.oldPwd}
                        placeholder='请输入原密码'
                        maxLength={16}
                        returnKeyType='next'
                        selectionColor='white'
                        clearButtonMode="while-editing"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='#999999'
                        onChangeText={text => this.setState({oldPwd:text})}
                    />
                </View>
                <View style={styles.lineViewStyle}>
                    <Text style={styles.textStyle}>新密码</Text>
                    <TextInput
                        style={styles.inputStyle}
                        defaultValue = {this.state.newPwd}
                        placeholder='请输入新密码'
                        maxLength={16}
                        returnKeyType='next'
                        selectionColor='white'
                        clearButtonMode="while-editing"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='#999999'
                        onChangeText={text => this.setState({newPwd:text})}
                    />
                </View>
                <View style={styles.lineViewStyle}>
                    <Text style={styles.textStyle}>再次输入</Text>
                    <TextInput
                        style={styles.inputStyle}
                        defaultValue = {this.state.newPwdRe}
                        maxLength={16}
                        placeholder='请再次输入新密码'
                        returnKeyType='done'
                        selectionColor='white'
                        clearButtonMode="while-editing"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='#999999'
                        onChangeText={text => this.setState({newPwdRe:text})}
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={active?
                        [styles.buttonStyle,{backgroundColor:config.themeColor}]
                        :
                        [styles.buttonStyle,{backgroundColor:'#cccccc'}]}
                    onPress = {this._modifyPWD.bind(this)}
                    disabled = {!active}>
                    <Text style={{fontSize:16, color:'white'}}>确定</Text>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
      color:'#000000',
      fontSize:14,
      width:60,
  },

  lineViewStyle:{
      height:50,
      flexDirection:'row',
      paddingLeft:15,
      borderBottomColor:'#eeeeee',
      backgroundColor:'white',
      borderBottomWidth:config.onePix,
      alignItems:'center',
  },

  buttonStyle:{
      marginLeft:15,
      marginTop:30,
      marginRight:15,
      height:44,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:4,
  },

  inputStyle:{
      height:50,
      color:'#000000',
      width:config.screenWidth-85,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:4,
      textAlign:'left',
  },
});