import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import ResultImc from './ResultImc'

export default function Form() {
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
            {/* <ResultImc messageResultImc={messageImc} resultImc={imc} /> */}
            <ResultImc messageResultImc="{messageImc}" resultImc="{imc}" />
        </View>
    );
}
