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
    

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editar){
            await axios.put('http://localhost:3000/carrito/'+this.state._id,{
                producto:this.state.producto,
                precio:this.state._precio,
                descripción:this.state._descripción
            });
            }
        else{
            await axios.post('http://localhost:3000/carrito',{
                producto:this.state.producto,
                precio:this.state._precio,
                descripción:this.state._descripción
            });
        }
        this.getProductos();
            
        }
        
        
        //console.log(res)
        
    


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
                    <h4> Colores </h4>                    
                    <form onSubmit={this.onSubmit}>                        
                    {this.state.productos.map(producto => (
                    <div className="form-group">
                        <div
                        key={producto.id} 
                        onDoubleClick={()=>this.deleteUser(producto.id)} 
                        onClick={()=>this.cargarDatosProducto(producto.id,producto.producto,producto.precio,producto.descripción)}
                        >
                            <div className="container p-2">
                            <h6> {producto.producto} </h6>
                            </div>
                            <div className="container p-2">
                                <h6> {producto.precio} </h6>
                            </div>
                            <div className="container p-2">
                                <h6> {producto.descripción} </h6>
                            </div>
                            <div className="container p-4">
                        </div>
                        </div>
                        <div className="container p-4">
                        <button type="submit" className="btn btn-primary">
                            Comprar
                        </button>
                        </div>
                        
                        </div>
                        
                        ))}
                                            
                    </form>
                    
                    
                    
                    
                </div>
                
            </div>
           
            </div>
            
)}
}
