import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Button({texto}:any) {

    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F61D9A',
        padding: 15,
        margin: 5,
        borderRadius: 5,
    },
    text: {
        color: 'white'
    }
  });