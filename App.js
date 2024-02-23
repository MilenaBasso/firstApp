import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
            </View>
            <View style={styles.secondaryContainer}>

                <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>Milena Basso</Text>
                <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 25, textAlign: 'start', borderWidth: 1, borderColor: 'purple' }}>Note 27</Text>
                <Text style={{ backgroundColor: 'pink', fontSize: 20, textAlign: 'center' }}>Sala 07</Text>
            </View>
            <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    secondaryContainer: {
        flex: 1,
        width: '100%',

        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});