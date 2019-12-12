import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import config from '../config';
import EmptyView from '../component/EmptyView';

const mode = {"title":"AMD第二代7nm GPU现身：原生支持光追","summary":"从代际的角度，第二代 Navi 很可能基于 RDNA2 架构，采用 7nm EUV 工艺制造，原生支持光线追踪技术，与 PS5/Xbox Scarlett 上的 GPU 实现同宗同源","cover":"https://img2018.cnblogs.com/news/34358/201911/34358-20191103101909127-2080407197.jpg","readNum":9999,"star":100}

const list = (Array.from(Array(20000), (v,k) =>k)).map(item => {
    return mode
})

export default class DiscoverScreen extends Component {
    static navigationOptions = {
        title: '发现',
    };

    constructor(props) {
        super(props);
        this.state = {
            posts:list,
        };
    }

    componentDidMount(){
    }

    _postDetail(item){
        this.props.navigation.navigate('post',{Id:item.title,title:item.title})
    }

    _renderItem = ({item,index}) =>(
        <TouchableOpacity style={styles.cell} activeOpacity={0.9} onPress={this._postDetail.bind(this,item)}>
            <View style={styles.cellLeft}>
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.summary}>{item.summary}</Text>
                <View style={styles.vertical}>
                    <View style={styles.vertical}>
                        <Image source={require('../../images/read_num.png')} style={styles.smallImage} />
                        <Text style={styles.smallText}>{item.readNum}</Text>
                    </View>
                    <View style={styles.vertical}>
                        <Image source={require('../../images/star_num.png')} style={styles.smallImage} />
                        <Text style={styles.smallText}>{item.star}</Text>
                    </View>
                </View>
            </View>
            <Image style={{width: 100, height: 60}} source={{uri: item.cover}}/>
        </TouchableOpacity>
    );

    render() {
        if (this.state.posts.length === 0){
            return <EmptyView emptyTitle={'暂无内容'}/>
        }else {
            return <View style={config.viewContainer}>
                <FlatList
                    data={this.state.posts}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item,index) => `${index}`}
                    renderItem={this._renderItem}
                />
            </View>
        }
    }
}

const styles = StyleSheet.create({
    cell:{
        backgroundColor:'white',
        borderBottomWidth:config.onePix,
        borderBottomColor:'#efefef',
        height:120,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
    },
    cellLeft:{
        flexDirection:'column',
        justifyContent:'space-between',
        flex: 1,
        
    },
    title:{
        fontSize:15,
        color:'#333333',
        fontWeight:"500",
    },
    summary:{
        fontSize:12,
        color:'#666666',
        marginTop:6,
        marginBottom:10,
    },

    vertical:{
        flexDirection:'row',
        alignItems:'center',
    },

    smallText:{
        fontSize:12,
        color:'#999999',
        marginRight:15,
        marginLeft:2,
    },

    smallImage:{
        width: 14, 
        height: 14
    },
})