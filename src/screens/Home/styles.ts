import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#131016',
        padding: 24
    },
    
    imgContainer: {
        alignItems: 'center',
    },

    img: {
        width: 115,
        height: 32,
        marginTop: 24,
        marginBottom: 40,
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 32
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#5E60CE',
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 4
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
  
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    info: {
        width: '100%',
        height: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20
    },

    criadas: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },

    concluidas: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },

    textCriadas: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },

    textConcluidas: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },

    containerListEmptyText: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 48
    },

    listEmptyTitle: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 16
      },

    listEmptySubtitle: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',

    },

    containerTextCounterCriadas: {
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        alignItems: 'center',
        marginLeft: 8,
        borderRadius: 10
    },

    containerTextCounterConcluidas: {
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        alignItems: 'center',
        marginLeft: 8,
        borderRadius: 10
    },

    textCounterCriadas: {
        color: "#D9D9D9"
    },

    textCounterConcluidas: {
        color: "#D9D9D9"
    },
})