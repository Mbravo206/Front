import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";

function Futuro() {
  const [mensajeLocal, setMensajeLocal] = useState("");

  useEffect(function () {
    traerMensajes();
  }, []);

  function traerMensajes() {
    axios
      .get(" https://taller-vl2a.onrender.com/recibir")
      .then(function (res) {
        if (res.data.status) {
          setMensajeLocal(res.data.datos.mensaje);
        }
      })

      .catch(function (error) {
        console.log(error);
        alert("Error al traer los mensajes");
      });
  }

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Tu yo del pasado te dejó este mensaje</Text>
      <View style={estilos.mensajeFuturo}>
        <Text style={estilos.textoMensaje}>Mensaje</Text>
        <Text style={estilos.textoMensaje}> {mensajeLocal} </Text>
      </View>
    </View>
  );
}

export default Futuro;
