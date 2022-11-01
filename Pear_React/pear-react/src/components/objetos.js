import { useState } from "react";
export default function Objetos({item, actualizarDatos, onEliminar}){
    //crear los estados adicionales

    const [isEditar, setIsEditar] = useState(false);
    //cuando isEditar esté en false, veo la función objetosIndividuales
    //cuando isEditar esté en true, veo la función FormEditar
    //esta función me permite editar los cambios
    function FormEditar(){
        const [newValor, setNewValor] = useState(item.etiqueta);
        const [newPrecio, setNewPrecio] = useState(item.precio);
        const [newDescp, setNewDescp] = useState(item.descp);
        
        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange(e){
            const value = e.target.value;
            setNewValor(value);
        }
        //el parametro e, es la variable interna del coponente cuando quiere ejecutar un evento
        function handleChangePrecio(e){
            const value = e.target.value;
            setNewPrecio(value);
        }
        function handleChangeDescp(e){
            const value = e.target.value;
            setNewDescp(value);
        }
        function handleClicActualizarObjeto(){
            actualizarDatos(item.id, newValor, newPrecio, newDescp);
            setIsEditar(false);
        }

        return(
            <form className='objActualizarForm' onSubmit={handleSubmit}>
                <input
                type="text"
                className='objInput'
                onChange={handleChange}
                //cambiar el nombre del producto
                value={newValor}
                />
                <input
                type="text"
                className='objInput'
                onChange={handleChangePrecio}
                //cambiar el precio del producto
                value={newPrecio}
                />
                <input
                type="text"
                className='objInput'
                onChange={handleChangeDescp}
                //cambiar el descripción del producto
                value={newDescp}
                />
                <button
                className='objBotonEditar'
                onClick={handleClicActualizarObjeto}
                >
                    Actualizar
                </button>

            </form>
        );
    }
    //esta función muestra los datos, pero no me deja editarlos
    function ObjetosIndividuales(){
        return (
            <div className='objInfo'>
                <span className='objEtiqueta'>{item.etiqueta}</span>
                <span className='objEtiqueta'>${item.precio}</span>
                <span className='objEtiqueta'>{item.descp}</span>
                <button className='botonActualizar' onClick={()=> setIsEditar(true)}>
                    Editar
                </button>
                <button className='botonEliminar' onClick={()=> onEliminar(item.id)}>
                    Eliminar
                </button>
            </div>
        );
    }


    return(
        <div className='objObjetos'>
            {isEditar ? <FormEditar/> : <ObjetosIndividuales/>
            }
        </div>
    )
}