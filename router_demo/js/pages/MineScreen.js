import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text,Image,StyleSheet,ImageBackground,TouchableOpacity,Alert } from 'react-native';
import PropTypes from 'prop-types';
import config from '../config';

export default class MineScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        console.log('MineScreen componentDidMount');
    }

    _pushModifyPWDPage(){
        Actions.updatePwd();
    }

    _pushUpdateMobilePage(){
        Actions.updatePhone();
    }

    _pushMySavePage(){
        Actions.order();
    }

    _pushMyMessagePage(){
        Actions.cart();
    }

    _pushHelpPage(){
        
    }

    _pushAboutPage(){
    }

    _userLoginOut(){
        Alert.alert(null,'确认要退出登录？',[
            {text: '取消', style: 'cancel'},
            {text: '退出', onPress: () => {
                Actions.signIn();
                }},
        ],)
    }

    _userLogin(){
        Actions.signIn();
    }

    renderHeader(){
        if(0){
            return this.renderLogin()
        }else{
            return this.renderUserInfo()
        }
    }

    renderUserInfo(){
        return (
            <ImageBackground source={require('../../images/bg.png')} style={styles.loginInView}>
                <View style={styles.userInfo}>
                    <Image style={styles.headerImage} source={require('../../images/man.png')} />
                    <View>
                        <Text style={{fontSize:14,color:"#fff"}}>昵称</Text>
                        <Text style={{fontSize:11,marginTop:8,color:"#fff"}}>等级</Text>
                    </View>
                </View>
                <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => Actions.userInfo()} 
                style={styles.infoButton}>
                    <Text style={{fontSize:13,color:'white'}}>个人信息</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    renderLogin(){
        return (
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={this._userLogin.bind(this)}>
                    <Image style={styles.headerImage} source={require('../../images/man.png')} />
                    <Text style={styles.loginText}>登录/注册</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderCell = () => (
         <View style={styles.cellViewStyle}>
                    <CellItem
                        text='订单'
                        image={require('../../images/like.png')}
                        onPress={this._pushMySavePage.bind(this)}
                    />
                    <CellItem
                        text='购物车'
                        image={require('../../images/message.png')}
                        onPress={this._pushMyMessagePage.bind(this)}
                    />
                    <CellItem
                        text='修改手机号'
                        image={require('../../images/phone.png')}
                        onPress={this._pushUpdateMobilePage.bind(this)}
                    />
                    <CellItem
                        text='修改密码'
                        image={require('../../images/password.png')}
                        onPress={this._pushModifyPWDPage.bind(this)}
                    />
                    <CellItem
                        text='打开Native'
                        image={require('../../images/help.png')}
                        onPress={this._pushHelpPage.bind(this)}
                    />
                    <CellItem
                        text='返回'
                        image={require('../../images/about.png')}
                        onPress={this._pushAboutPage.bind(this)}
                    />
                </View>
    )

    render() {
        return (
            <View style={config.viewContainer}>
                {this.renderHeader()}
                {this.renderCell()}
                <TouchableOpacity activeOpacity={0.8} onPress={this._userLoginOut.bind(this)}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>退出登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

class CellItem extends Component{

    render(){
        const {text,image,onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress}>
                <View style={styles.viewStyles}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={styles.cellImageStyle} source={image}/>
                        <Text style={{color:'#333333'}}>{text}</Text>
                    </View>
                    <View style={styles.IconViewStyle}>
                        <Image style={styles.IconStyle} 
                        source={require('../../images/arrow_right.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

CellItem.propTypes={
    text:PropTypes.string.isRequired,
    image:PropTypes.number.isRequired,
    onPress:PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    cellViewStyle:{
        backgroundColor:'white',
        marginTop:10,
    },
    viewStyles:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:15,
        paddingRight:10,
        height:54,
        backgroundColor:'white',
        borderBottomWidth:config.onePix,
        borderBottomColor:'#efefef',
    },

    IconViewStyle:{
        flexDirection:'row',
    },

    textStyle:{
        color:'#333333',
        fontSize:13,
    },

    IconStyle:{
        height:12,
        width:12,
        marginLeft:4,
    },

    cellImageStyle:{
        height:18,
        width:18,
        marginRight:8,
    },

    buttonStyle:{
        marginTop:20,
        height:44,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },
    buttonTextStyle:{
        fontSize:16,
        color:'#F16B82',
    },

    headerView:{
        height:200,
        flexDirection:'row',
        backgroundColor:'#167DF7',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:44,
        paddingLeft:15,
    },

    loginInView:{
        height:config.screenWidth*878/1316,
        flexDirection:'row',
        backgroundColor:'#167DF7',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
    },

    userInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    loginButton:{
        flexDirection:'row',
        alignItems:'center',
    },

    headerImage:{
        height:50,
        width:50,
        marginRight:10,
    },

    loginText:{
        fontSize:14,
        color:'#FFFFFF',
    },

    infoButton:{
        fontSize:14,
        color:'#FFFFFF',
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        width:90,
        height:35,
    },
})