import {View,ScrollView, Image, Text, StyleSheet,TextInput, TouchableOpacity,} from 'react-native'
import { FlatList } from 'react-native-web';


function Screen2({navigation}){
    
    const DATA=
        [
            {
                img: require('../assets/cap1.png'),
                name: 'Cáp chuyển từ Cổng USB sang PS2...',
                price: '69.900 đ',
                discount: '-39%',
                rating: 15
            }, 
            {
                img: require('../assets/cap2.png'),
                name: 'Cáp chuyển từ Cổng USB sang PS2...',
                price: '69.900 đ',
                discount: '-39%',
                rating: 15
            },
            {
                img: require('../assets/cap3.png'),
                name: 'Cáp chuyển từ Cổng USB sang PS2...',
                price: '69.900 đ',
                discount: '-39%',
                rating: 15
            },
            {
                img: require('../assets/cap4.png'),
                name: 'Cáp chuyển từ Cổng  USB sang PS2...',
                price: '69.900 đ',
                discount: '-39%',
                rating: 15
            },
            {
                img: require('../assets/cap5.png'),
                name: 'Cáp chuyển từ Cổng USB sang PS2...',
                price: '69.900 đ',
                discount: '-39%',
                rating: 15
            },
            {
                img: require('../assets/cap6.png'),
                name: 'Cáp chuyển từ Cổng USB sang PS2...',
                price: '69.900 đ',
                discount: '-39%',
                rating: 15
            }
        
    ]

    return(
        <View style={styles.container}>
            <View style = {styles.top}>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                <Image style={{width: 30, height: 30}} source={require('../assets/look.png')}></Image>
                    <TextInput placeholder='Dây cáp usb' style={{color: '#8b6d6d'}}></TextInput>
                    
                </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Image style={{width: 30, height: 30, }} source={require('../assets/muasam.png')}></Image>
                    <Image style={{width: 15, height: 15, }} source={require('../assets/circleRed.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30, }} source={require('../assets/bacham.png')}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <FlatList data = {DATA} numColumns={2}  renderItem={({item})=>{
                    return(
                       <View style={{backgroundColor: '#FFFFFF',borderWidth: 1, borderColor: '#C4C4C4', marginHorizontal: '5px', marginVertical: '20px' , }}>
                            <TouchableOpacity>
                                <View style={{alignItems: 'center', marginVertical: '5px',flexDirection: 'row', justifyContent:'center'}}>
                                    <Image source={item.img} style={{width: '60px', height: '60px', borderWidth: 1, borderColor: 'red'}}></Image>                                    
                                </View>
                            </TouchableOpacity>
                            <Text style={{fontSize: 12}}>{item.name}</Text>
                            <View style={{flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>
                                <Image style={{width: '13px', height: '13px'}} source={require('../assets/ngoisao.jpg')}></Image>
                                <Image style={{width: '13px', height: '13px'}} source={require('../assets/ngoisao.jpg')}></Image>
                                <Image style={{width: '13px', height: '13px'}} source={require('../assets/ngoisao.jpg')}></Image>
                                <Image style={{width: '13px', height: '13px'}} source={require('../assets/ngoisao.jpg')}></Image>
                                <Image style={{width: '13px', height: '13px'}} source={require('../assets/ngoisaorong.png')}></Image>
                                
                                <TouchableOpacity>
                                    <Text>({item.rating})</Text>
                                </TouchableOpacity>
                                
                            </View>
                             <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight:'bold'}}>{item.price}  </Text>
                                <Text style={{}}>{item.discount}</Text>
                            </View>
                       
                       </View>
                       
                       
                    )
                }}>

                </FlatList>
                
            </ScrollView>


            <View style = {styles.bottom}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                    <Image style={{width: 30, height: 30, paddingVertical: '15px'}} source={require('../assets/menu.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                    <Image style={{width: 30, height: 30, paddingVertical: '15px'}} source={require('../assets/home.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                    <Image style={{width: 30, height: 30, paddingVertical: '15px'}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
  
            }
 export default Screen2;
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    top:{
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
        borderWidth: 1,
        borderColor: 'black'
    },
    center:{
        
    },
    bottom:{
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
        borderWidth: 1,
        borderColor: 'black'
    },
})



