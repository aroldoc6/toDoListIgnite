import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    name: {
        flex: 1,
        fontSize: 16,
        color: '#F2F2F2',
        marginLeft: 16,
    },
    nameChecked: {
        flex: 1,
        fontSize: 16,
        color: '#808080',
        textDecorationLine: 'line-through',
        marginLeft: 16,
    },

    buttonText: {
        color: '#F2F2F2',
        fontSize: 24,
      },
  
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
});