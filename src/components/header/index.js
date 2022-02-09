import {SafeAreaView, View, StyleSheet, Image} from 'react-native';

function Header(){
    return(
        <SafeAreaView>
            <View style={styles.header}>
            <Image source ={require('../../Assets/img/img-carne-removebg-preview.png')}
            style={{width:165, height: 48 }}
            />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'rgba(128, 0, 0, 0.75)',
        alignItems: 'center',
        height: 50,
        margin: 0
    }

});

export default Header;