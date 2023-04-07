import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { products } from '../../data';
import { ProductsCard } from '../../components';

export default function Cart({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Cart</Text>
                {products.map(product => (
                    <ProductsCard
                        key={product.id}
                        product={product}
                        navigation={navigation}
                        onPress={() => navigation.navigate('ProductDetails', { product })}
                    />
                ))}
            </View>
        </SafeAreaView>
    );
}