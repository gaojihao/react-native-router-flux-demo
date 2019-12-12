import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class EmptyView extends Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image
                source={require('../../images/empty.png')}
                style={{width: 62, height: 59 }} /> 
                <Text style={{fontSize:14,marginTop:4,color:'#999999'}}>{this.props.emptyTitle}</Text>
            </View>
        )
    }
}

EmptyView.propTypes = {
    emptyTitle:PropTypes.string,
};

EmptyView.defaultProps = {
    emptyTitle:'这里没有内容',
};