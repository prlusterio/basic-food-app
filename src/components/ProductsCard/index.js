import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ProductsCard = (props) => {
    const { product, onPress } = props;

    return (
        <TouchableOpacity
            style={styles.productContainer}
            onPress={onPress}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDuration}>{product.duration}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductsCard