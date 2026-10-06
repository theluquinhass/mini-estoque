import { styles } from "@/styles/styles";
import { Text, View } from "react-native";

export function ProductCard({product}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.title}>R${product.price}</Text>
            <Text style={styles.title}>{product.stock} estoque</Text>
        </View>
    )
}