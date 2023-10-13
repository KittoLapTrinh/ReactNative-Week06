import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

function PickColor({ navigation }) {
    const [path, setPath] = useState(require('../assets/vs_blue.png'))


    return ( 
        <View style={styles.wrapper}>
            <View style={styles.productWrapper}>
                <Image style={styles.productImg} source={path} />
                <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.btnTxt}>Chọn một màu bên dưới:</Text>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={[styles.colorBtn, {backgroundColor: '#C5F1FB'}]} onPress={() => setPath(require('../assets/vs_silver.png'))} ></TouchableOpacity>  
                    <TouchableOpacity style={[styles.colorBtn, {backgroundColor: '#F30D0D'}]} onPress={() => setPath(require('../assets/vs_red.png'))} ></TouchableOpacity>  
                    <TouchableOpacity style={[styles.colorBtn, {backgroundColor: '#000'}]} onPress={() => setPath(require('../assets/vs_black.png'))} ></TouchableOpacity>  
                    <TouchableOpacity style={[styles.colorBtn, {backgroundColor: '#234896'}]} onPress={() => setPath(require('../assets/vs_blue.png'))} ></TouchableOpacity>  
                </View>
                <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('Home', {pathImg: path})}>
                    <Text style={styles.submitTxt}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default PickColor;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 10,
    },
    productWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    productImg: {
        width: 112,
        height: 132,
    },
    productName: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 15,
        marginLeft: 10,
        marginTop: 20,
    },
    bodyWrapper: {
        backgroundColor: '#c4c4c4',
        width: '100%',
        height: '100%',
        display: 'flex',
        marginTop: 20,
    },
    btnTxt: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        marginTop: 10,
    },
    btnWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    colorBtn: {
        width: 85,
        height: 85,
        marginTop: 10,
    },
    submitBtn: {
        width: '100%',
        height: 45,
        backgroundColor: '#234896',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderColor: 'red', 
        borderWidth: 1,
      
    },
    submitTxt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        color: '#fff',
    }
})