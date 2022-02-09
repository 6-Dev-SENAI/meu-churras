import { StyleSheet, Text, View } from 'react-native';

const ChurrasTitle = (props) => {
    return <Text style={styles.title_style}>{props.text}</Text>   
}

const styles = StyleSheet.create({
    title_style: {
        color: '#000000',
        textAlign: 'left',
        margin: 12,
        paddingTop: 15,
        paddingLeft: 7,
        fontSize: 23,
        fontWeight: "600",
        fontWeight: "600",
        textDecorationLine: 'underline',
    },
});

export default ChurrasTitle;