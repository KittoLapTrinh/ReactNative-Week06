import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

function Home({ navigation, route }) {
    const pathImg = route.params

    console.log(pathImg)

    return ( 
        <View style={styles.wrapper}>
            <Image style={styles.productImg} source={pathImg == undefined ? require('../assets/vs_blue.png') : pathImg.pathImg} />
            <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={styles.rateWrapper}>
                <View style={styles.starWrapper}>
                    <Image style={styles.ngoisao} source={require('../assets/ngoisao.jpg')} />
                    <Image style={styles.ngoisao} source={require('../assets/ngoisao.jpg')} />
                    <Image style={styles.ngoisao} source={require('../assets/ngoisao.jpg')} />
                    <Image style={styles.ngoisao} source={require('../assets/ngoisao.jpg')} />
                    <Image style={styles.ngoisao} source={require('../assets/ngoisao.jpg')} />
                </View>
                <Text style={styles.rateTxt}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>1.790.000 đ</Text>
                <Text style={styles.priceBefore}><del>1.790.000 đ</del></Text>
            </View>
            <View style={styles.cheapWrapper}>
                <Text style={styles.cheapTxt}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Text style={styles.help}>?</Text>
            </View>
            <TouchableOpacity style={styles.pickColorBtn}  onPress={() =>navigation.navigate('PickColor')}>
                <Text style={styles.pickColorTxt}>4 MÀU-CHỌN MÀU</Text>
                <Image style={styles.next} source={require('../assets/Vector.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitTxt}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Home;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
    },
    productImg: {
        width: 300,
        height: 360,
    },
    productName: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 400,
    },
    rateWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    starWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    ngoisao: {
        width: 25,
        height: 25,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 10,
    },
    price: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
    },
    priceBefore: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.58)',
        position: 'relative',
        marginLeft: 50,
    },
    line: {
        width: 65,
        height: 2,
        position: 'absolute',
        top: 10,
        left: 110,
    },
    cheapWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    cheapTxt: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 700,
        color: '#FA0000',
    },
    help: {
        borderRadius: '50%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        marginLeft: 10,
        paddingLeft: 7,
        paddingRight: 7,
    },
    pickColorBtn: {
        width: '100%',
        height: 35,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.46)',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 10,
      
    },
    pickColorTxt: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 400,
    },
    next: {
        width: 15, 
        height: 15,
        position: 'absolute',
        right: 10,
    },
    submitBtn: {
        backgroundColor: '#CA1536',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderRadius: 10,
        marginTop: 70,
        
    },
    submitTxt: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 400,
        color: '#fff',
    }
})