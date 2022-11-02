import React, { useState, Component } from 'react'
import axios from 'axios'


export default class CreateUser extends Component {
    
    
    
    state = {
        productos: [],
        producto:'',
        editar:false,
        _id:'',
        _precio:'',
        _descripción:''
        
    }

    async componentDidMount() {
        this.getProductos();
        //console.log(rest);
        //console.log(this.state.productos);
    }

    getProductos=async () =>{
    const rest = await axios.get('http://localhost:3000/productos');
    this.setState({ productos: rest.data });
    }
    
    onChangeName = (e) => {
	//console.log(e.target.value)
    this.setState({producto:e.target.value});           
    }

    onChangePrice = (e) => {
        //console.log(e.target.value)
        this.setState({_precio:e.target.value});           
        }

    onChangeDescription = (e) => {
        //console.log(e.target.value)
        this.setState({_descripción:e.target.value});           
        }
    
    onClean =() => {
        this.setState({ 
            producto:'',
            _precio:'',
            _descripción:'',
            editar:false
        }); 
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editar){
            await axios.put('http://localhost:3000/productos/'+this.state._id,{
                producto:this.state.producto,
                precio:this.state._precio,
                descripción:this.state._descripción
            });
            }
        else{
            await axios.post('http://localhost:3000/productos',{
                producto:this.state.producto,
                precio:this.state._precio,
                descripción:this.state._descripción
            });
        }
        this.getProductos();
        this.onClean();
        //console.log(res)
        
    }

    deleteUser= async (id) => {
        //console.log(id);
        await axios.delete('http://localhost:3000/productos/'+id);
        this.getProductos();
    }

    cargarDatosProducto= async (id,producto,precio,descripción) =>{
        //console.log(id+'-'+name+'-'+price+'-'+description);
        this.setState({
            _id:id         ,
            producto:producto,
            _precio:precio ,
            _descripción:descripción ,
            editar: true
        });
        console.log(this.state._id);
    }



    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3> Crear Nuevo Producto </h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className="container p-2">
                                <h6> Nombre: </h6>
                                <input type="text" className="form control" value={this.state.producto} onChange={this.onChangeName}/>
                                </div>
                                <h6> Precio: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" value={this.state._precio} onChange={this.onChangePrice}/>
                                </div>
                                <h6> Descripcion: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" value={this.state._descripción} onChange={this.onChangeDescription}/>
                                </div>
                            </div>
                            <div className="container p-4">
                            <button type="submit" className="btn btn-primary">
                                GUARDAR
                            </button>
                            <div className="container p-2">
                            <button type="reset" className="btn btn-primary" onClick={()=>this.onClean()}>
                                LIMPIAR
                            </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.productos.map(producto => (
                                
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={producto.id} 
                                    onDoubleClick={()=>this.deleteUser(producto.id)} 
                                    onClick={()=>this.cargarDatosProducto(producto.id,producto.producto,producto.precio,producto.descripción)}
                                    >
                                    
                                    {producto.producto}
                                    
                                    
                                </li>
                                
                                )
                                
                            )
                            
                        }
                        
                    </ul>

                </div>
            </div>
        )
    }
}
