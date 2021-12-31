import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import ResultImc from './ResultImc'

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() {
        return setImc((weight / (height + height)).toFixed(2));
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("IMC: ");
            setTextButton("Calcular novamente");
        }
        else {
            setImc(null);
            setTextButton("Calcular");
            setImc("Preencha o peso e altura");
        }
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.70"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex. 78.6"
                    keyboardType="numeric"
                />
                <Button
                    title="Calcular IMC"
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}
