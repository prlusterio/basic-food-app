import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import NumberInput from '../../components/NumberInput';
import { categories } from '../../data';
import { styles } from './styles';

const ProductDetails = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity style={[styles.category, { backgroundColor: category.status === 'active' ? '#434343' : '#fff' }]} key={category.id}>
                <Text style={[styles.categoryText, { color: category.status === 'active' ? '#fff' : '#959595' }]}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.quantityContainer}>
            <NumberInput
              value={quantity}
              onChange={(value) => setQuantity(value)}
              containerStyle={styles.numberInputContainer}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.priceContainer}>
        <View style={styles.priceColumn}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.priceValue}>${product.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
