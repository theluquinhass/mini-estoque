import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: colors.green.dark,
    },
    container: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        margin: 10,
        padding: 10,
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    categories: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    products: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    }
})