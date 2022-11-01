import React from 'react';
import { useState } from "react";
import Objetos from "./objetos";
import '../styles/objetos.css';

export default function PearApp() {
    //useState es un hook para crear un estado
    //etiqueta sería un getter
    //setEtiqueta sería el setter
    const [etiqueta, setEtiqueta] = useState('');

    const [cuerpo, setCuerpo] = useState([]);

    const [precio, setPrecio] = useState('');

    const [descp, setDescp] = useState('');

    function handleEnviar(e) {
        //deshabilito sus funciones por defecto
        e.preventDefault();
        //escribo lo que yo deseo que se ejecute en ese evento
        if(etiqueta === '' || precio === ''){
            alert('Alguno de los campos está vacío');
        }
        else{
            //creamos un nuevo elemento de la lista para mi caso un producto de la tienda
        const newObjeto = {
            //crypto es un API que nos proporciona claves o identificaciones aleatorios y que no se repiten
            //estos serían los atributos de este nuevo elemento
            id: crypto.randomUUID(),
            etiqueta: etiqueta,
            precio: precio,
            descp: descp,
            //stock: false;
        };

        //adicionar al cuerpo de la página los productos que he venido creando
        const copia = [...cuerpo];
        //lo ubico al principio del arreglo
        copia.unshift(newObjeto);
        //pongo en el cuerpo todos los elementos creados
        setCuerpo(copia);
        //borro la información de la etiqueta para que el input quede en blanco
        setEtiqueta('');
        setPrecio('');
        setDescp('');
        //la variable copia crea el JSON
    }
    }
/*
    function handleClic(e) {
        e.preventDefault();
        setEtiqueta("Cambios");
    }
*/
    function handleCambios(e){
        const value = e.target.value;
        setEtiqueta(value);
    }

    function handleCambiosPrecios(e){
        const value = e.target.value;
        setPrecio(value);
    }

    function handleCambiosDescp(e){
        const value = e.target.value;
        setDescp(value);
    }

    function handleActualizar(id, value, value2, descp){
        if(value === '' || value2 === ''){
            alert('Alguno de los campos está vacío');
        }
        else{
        const copia =[...cuerpo];
        const item = copia.find(item => item.id === id);
        item.etiqueta = value;
        item.precio = value2;
        item.descp = descp;
        setCuerpo(copia);
        }
    }

    function handleEliminar(id){
        //se compara con valor diferente para que lo oculte, más no para eliminarlo
        const copia = cuerpo.filter(item => item.id !== id);
        setCuerpo(copia)
    }
//todo lo que sea className es CSS
    return (
        <div className='objContenedor'>
        <div className='objTitulos2'>
            <span>Vista Administrador</span>
        </div>
        <br></br>
        <div className='objVistas'>
            <span>Lista de productos</span>
            <span>Modificar productos</span>
            <span>Lista de ventas</span>
        </div>
        <br></br>
        <div className='objTitulos'>
                    <span>Nombre del producto</span>
                    <span>Precio</span>
                    <span>Descripción</span>
                </div><br></br>
            <form className='objFormulario'
            //onSubmit es un evento del formulario, que indica que es un form de envío de datos
            onSubmit={handleEnviar}
            >
                <div className='objDatos'>
                <input
                    className='objInput'
                    //onChange es un evento del input que actualiza en tiempo real lo que se escribe allí
                    onChange={handleCambios}
                    value={etiqueta}     
                />
                </div><br></br>
                <div className='objDatos'>
                <input
                    className='objInput'
                    //onChange es un evento del input que actualiza en tiempo real lo que se escribe allí
                    onChange={handleCambiosPrecios}
                    value={precio}     
                />
                </div><br></br>
                <div className='objDatos'>
                <input
                    className='objInput'
                    //onChange es un evento del input que actualiza en tiempo real lo que se escribe allí
                    onChange={handleCambiosDescp}
                    value={descp}     
                />
                </div><br></br>
                <div>
                <input
                    //onClick={handleClic} es un evento de hacer click, ¿qué pasas si hago click?
                    onClick={handleEnviar}
                    className='objBoton'
                    type='submit'
                    value='Crear Objeto'
                />
                </div>
                {/*
                {etiqueta}
                */
                }
            </form>

            <div className='cuerpoContenedor'>
                {
                    //map es similar a un ciclo for, que se itera automáticamente con los items que tiene
                    cuerpo.map(item =>(
                        //<div>{item.id}</div>
                        <Objetos
                        //el key controla el identificador, por si algún dato se repite
                        key={item.id}
                        item={item}
                        actualizarDatos={handleActualizar}
                        onEliminar={handleEliminar}
                        />                        
                    ))
                }
            </div>

        </div>
    );
}