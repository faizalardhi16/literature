import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image, TouchableNativeFeedback} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

class News extends Component{
    constructor(){
        super();
        this.state={
            dataSource:[]
        }
    }

    renderItem = ({item})=>{
        <View>
            <Image source={{uri:item.urlToImage}}/>
            <View>
                <Text>
                    {item.title}
                </Text>
                <Text>
                    {item.content}
                </Text>
            </View>
        </View>
    }


    componentDidMount(){
        const url = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=46b18cc324d14a98a2f2e51f8f913032';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson)=>{
            this.setState({
                dataSource:responseJson.articles
            })
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        return(
            <SafeAreaView>
                <View style={styles.container}>
                    <FlatList data={this.state.dataSource}
                    renderItem={this.renderItem}
                    />
                </View>
            </SafeAreaView>
        
        )
    }
}
      


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  images:{
      width:315,
      height:315
  },
  judul:{
      fontSize:24,
      fontWeight:'bold'
  },
  content:{
      height:100,
      backgroundColor:'#FFFFFF',
      marginHorizontal:8,
      padding:8,
      borderColor:'pink',
      borderWidth:1,
      margin:10
  },
  isi:{
     marginTop:8 
  }
})  

export default News;