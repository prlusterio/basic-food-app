import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        height: 184,
        // Box shadow effect for Android
        // elevation: Platform.OS === 'android' ? 5 : 0,
        // // Box shadow effect for iOS
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 5
    },
    productDetails: {
        flex: 1
    },
    productName: {
        fontSize: 28,
        fontWeight: 800,
        marginBottom: 5
    },
    productDuration: {
        fontWeight: 'semibold',
        fontSize: 12,
        color: '#888',
        marginBottom: 5
    },
    productPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2FB300'
    }
});