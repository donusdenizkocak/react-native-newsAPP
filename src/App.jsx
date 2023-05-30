import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, View ,ScrollView, Image, Dimensions, Text} from 'react-native'
import news_data from './components/news_data.json'
import NewsCard from './components/NewsCard/NewsCard'
import news_banner_data from './components/news_banner_data.json'

 const App = () => {
    const renderNews=({item}) => <NewsCard news={item}/>
  return (
    <SafeAreaView style={styles1.container}>
        <View>
        <Text style={styles1.header_text}>
            NEWS
        </Text>
            <FlatList
            ListHeaderComponent={()=>(
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  news_banner_data.map(bannernews=> (
                    <Image style={styles1.banner_img} source={{uri:bannernews.imageUrl}}/>
                  ))
                }
               </ScrollView>
            )}
             data={news_data}
             renderItem={renderNews}
             />
        </View>

    </SafeAreaView>
  )
}

const styles1=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eceff1',
        margin:10,
    },
    banner_img:{
        height:Dimensions.get('window').height/5,
        width:Dimensions.get('window').width/2,
    },
    header_text:{
        fontWeight:'bold',
        fontSize:40,
    }
})
export default App;