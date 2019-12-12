import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View,Text,StatusBar,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import theme from '../config';

const userLocation = 'XYZX_USER_ACCOUNT';

export default class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumInput:'',
            pwdNumInput:''
        }
    }

    _userLogin(){
        const {phoneNumInput,pwdNumInput} = this.state;
        
        Actions.pop();

    }
    

    render() {
        return (
            <View style={styles.viewStyle}>
                {/*手机号密码*/}
                <StatusBar barStyle="light-content" backgroundColor="#167DF7"/>
                <View style={styles.backViewStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        keyboardType='numeric'
                        maxLength = {11}
                        placeholder='请输入11位手机号码'
                        returnKeyType='next'
                        selectionColor='white'
                        underlineColorAndroid='transparent'
                        placeholderTextColor='#999999'
                        onChangeText={(text) => this.setState({phoneNumInput:text})}

                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='请输入密码'
                        returnKeyType='done'
                        selectionColor='white'
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='#999999'
                        onChangeText={(text) => this.setState({pwdNumInput:text})}
                    />
                </View>
                {/*登录按钮*/}
                <TouchableOpacity
                     onPress = {this._userLogin.bind(this)}
                     disabled = {(this.state.phoneNumInput.length === 11 &&
                         this.state.pwdNumInput.length >= 6)? false:true}
                >
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'#167DF7',
        justifyContent:'center',
    },
    backViewStyle:{
        backgroundColor:'rgba(255,255,255,0.6)',
        marginLeft:20,
        marginRight:20,
        borderRadius:4,
    },
    inputStyle:{
        height:45,
        color:'white',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:theme.onePix,
        margin:4,
        borderRadius:2,
        textAlign:'center',
    },
    buttonStyle:{
        margin:20,
        height:44,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },
    buttonTextStyle:{
        fontSize:16,
        color:theme.themeColor,
    }
})