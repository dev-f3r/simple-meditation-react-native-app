import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function HomeScreen() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text style={styles.text}>Hello world</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});
