import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        lineHeight: 49.4
    },
    image: {
        width: '100%',
        height: width - 140,
        marginBottom: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 20
    },
    category: {
        borderColor: 'black',
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        // Box shadow effect for Android
        elevation: Platform.OS === 'android' ? 5 : 0,
        // Box shadow effect for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: '#959595'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EEEEEE',
        padding: 20,
        borderRadius: 15,
        marginTop: 10
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute', // to ensure the container stays at the bottom of the screen
        bottom: 0, // to ensure the container stays at the bottom of the screen
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#fff',
    },
    priceLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#959595'
    },
    priceValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2FB300'
    },
    addToCartButton: {
        backgroundColor: '#FFA800',
        padding: 10,
        borderRadius: 10,
        borderRadius: 15
    },
    addToCartButtonText: {
        padding: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});