import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //contextImc será nosso componente pai
    contextImc: {
        flex: 1,
        marginTop: 40,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
    },
    //No resultado do caclulo do imc colocaremos esse estilo
    resultImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },
    //esse sera a frase que exibiremos abaixo do resultado 
    titleResultImc: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold",
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
});

export default styles;
