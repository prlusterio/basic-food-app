import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#fff',
        flex: 1
    },
    container: {
        padding: 20
    },
    title: {
        marginBottom: 10,
        fontWeight: 400,
        marginBottom: 5,
        fontSize: 18,
        color: '#959595',
    },
    subtitle: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'semibold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
        height: 55
    },
    searchIconContainer: {
        backgroundColor: '#4285f4',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 10
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff'
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // flex-start; space-evenly; flex-end
        marginBottom: 20,
    },
    category: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 30,
        borderRadius: 10,
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
    }
});