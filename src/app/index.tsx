import { Pressable, Text, TextInput, View, } from 'react-native';

import { ProductCard } from '@/components/ProductCard';
import { styles } from '@/styles/styles';


export default function Index() {

    const products = [
        {
            name: "Coca-Cola",
            price: 3.00,
            stock: 20
        },
        {
            name: "Água",
            price: 2.00,
            stock: 15
        },
        {
            name: "Sorvete",
            price: 5.00,
            stock: 10
        },
        {
            name: "Chocolate",
            price: 4.00,
            stock: 25
        },
        {
            name: "bibi",
            price: 3.00,
            stock: 20
        }
    ];

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Mini Estoque</Text>
            <TextInput placeholder="🔍 Buscar produto..." style={styles.input} />
            <Text style={styles.category}>Categorias</Text>
            <View style={styles.container}>
                <Pressable style={styles.categories}>
                    <Text>Todos</Text>
                </Pressable>
                <Pressable style={styles.categories}>
                    <Text>Agua</Text>
                </Pressable>
                <Pressable style={styles.categories}>
                    <Text>Sorvete</Text>
                </Pressable>
            </View>
            <Text style={styles.products}>Produtos</Text>
            {products.map(product => {
                return (
                    <ProductCard 
                        product={product}
                    />
                )
            })}
        </View>
    )
}