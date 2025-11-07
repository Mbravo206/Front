import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Boton from "../../assets/componentes/boton";
import estilos from "../../assets/Styles/Styles";


export default function Index() {
  const [mensaje, setMensaje] = useState("");


  function enviarMensaje() {

    const Mensaje = {
      mensajes: mensaje, //el de la interfaz  el primero de mongo
    };
    axios.post("https://taller-vl2a.onrender.com/subir", Mensaje)
  
    .then(function (res) {
      alert("el mensjae se envío");
      setTimeout(3000);
      router.push("./futuro");
    }, 3000)
    .catch()
  }

    return (
      <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Bienvenido a la máquina del tiempo</Text>
        <Text style={estilos.texto}>
          A través de esta aplicación vamos a poder enviar un mensaje hacia el
          futuro. Escribe tus ideas y envíalas a tu "yo" en el futuro
        </Text>
        <TextInput
          style={estilos.input}
          placeholder="Escribe tu mensaje para ir al futuro "
          placeholderTextColor="#f47b7b"
          onChangeText={setMensaje}
          value={mensaje}
          multiline
        />
        <Boton texto="Enviar"  funcion={enviarMensaje}/>
      </View>
    );
  }

