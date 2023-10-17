import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';


function Screen1({navigation }){

    const DATA =[
        {
            img: require('../assets/canaulau.jpg'),
            name: 'Ca nấu lẫu, nấu mì mini...',
            shopName: 'Devang'
        
        },
        {
            img: require('../assets/khoga.jpg'),
            name: '1KG KHÔ GÀ BƠ TỎI...',
            shopName: 'LTD Food'
        },
        {
            img: require('../assets/xecancau.jpg'),
            name: 'Xe cần cẩu đa năng',
            shopName: 'Thế giới đồ chơi'
        },
        {
            img: require('../assets/xetai.jpg'),
            name: 'Đồ chơi dạng mô hình',
            shopName: 'Thế giới đồ chơi'
        },
        {
            img: require('../assets/lanhdao.jpg'),
            name: 'Lãnh đạo giản đơn',
            shopName: 'Minh Long Book'
        },
        {
            img: require('../assets/hieulong.jpg'),
            name: 'Hiểu lòng con trẻ',
            shopName: 'Minh Long Book'
        },
        {
            img: require('../assets/trump.jpg'),
            name: 'Donal Trump Thiên tài lãnh đạo',
            shopName: 'Minh Long Book'
        },
    ]
    
    return(
        <View style = {styles.container}>
            
            <View style = {styles.top}>
                
                
                <View style = {styles.top1}>
                    <TouchableOpacity>
                        <Image style={{width: 30, height: 30}} source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'while',}}>Chat</Text>
                    <TouchableOpacity>
                        <Image style={{width: 30, height: 30, }} source={require('../assets/muasam.png')}></Image>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style ={{ backgroundColor: '#C4C4C4'}}></View>
            <ScrollView>
                        <View style={{flex: 25}}>
                            <Text style={{fontSize: 15, paddingHorizontal: 30, alignItems: 'center'}}>Bạn có thắc mắc với sản phẩm vừa  xem. Đừng ngại chát với shop!</Text>
                        </View>
                        <View style ={{ backgroundColor: '#C4C4C4'}}></View>
                    <FlatList data={DATA} renderItem = {({item}) =>{
                        return(
                            
                            <View style={{backgroundColor: '#e5e5e5',flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 0.1}}>
                                
                                
                                <Image style={{flex: 0.5, marginLeft: '15px',width: '10px', height: '75px', borderColor: 'black' , borderWidth: 1, borderRadius: 5}} source={item.img}/>
                                
                                <View style={{flex: 0.8}}>
                                    <Text style={{marginLeft: '15px',fontWeight: 'bold'}}>{item.name}</Text>
                                    <Text style={{marginLeft: '15px',}}><Text style={{color: '#7D5B5B'}} >Shop</Text>  {item.shopName}</Text>
                                </View>
                                
                                <TouchableOpacity style={{flex: 0.5, backgroundColor: '#F31111'}} onPress={() => navigation.navigate('Screen2')}>
                                    <Button style={{flex: 1,}}  title='Chat'></Button>
                                </TouchableOpacity>
                                
                            </View>
                            
                        )
                    }}>

                    </FlatList>
                    
                    
              
            </ScrollView>
            
            <View style = {styles.bottom}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen2')}}>
                    <Image style={{width: 30, height: 30, paddingVertical: '15px'}} source={require('../assets/menu.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen2')}}>
                    <Image style={{width: 30, height: 30, paddingVertical: '15px'}} source={require('../assets/home.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen2')}}>
                    <Image style={{width: 30, height: 30, paddingVertical: '15px'}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    top:{
        flex: 1,
        backgroundColor: '#e5e5e5'
        
        
        

    },
    top1:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1BA9FF'
    },
    
  
    bottom:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
        
    },
    
})

export default Screen1;