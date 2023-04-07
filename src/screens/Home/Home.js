import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { products } from '../../data';
import { ProductsCard, SearchInput } from '../../components';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Hello user</Text>
                <Text style={styles.subtitle}>Welcome Back!</Text>
                <View style={styles.searchContainer}>
                    <SearchInput />
                </View>
                <View style={styles.categoriesContainer}>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.category, { backgroundColor: '#434343' }]}>
                        <Text style={[styles.categoryText, { color: '#fff', fontWeight: 'bold' }]}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Burgers</Text>
                    </TouchableOpacity>
                </View>
                {products.map(product => (
                    <ProductsCard
                        key={product.id}
                        product={product}
                        onPress={() => navigation.navigate('ProductDetails', { product })}
                    />
                ))}
            </View>
        </SafeAreaView>
    );
}