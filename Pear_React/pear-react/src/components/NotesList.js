import React, { useState, Component } from 'react'
import axios from 'axios'


export default class CreateUser extends Component {
    
    
    
    state = {
        carrito: [],
        producto:'',
        editar:false,
        _id:'',
        _precio:'',
        _descripción:''
        
    }

    async componentDidMount() {
        this.getCarrito();
        //console.log(rest);
        //console.log(this.state.productos);
    }

    getCarrito=async () =>{
    const rest = await axios.get('http://localhost:3000/carrito');
    this.setState({ carrito: rest.data });
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
        this.getCarrito();
        this.onClean();
        //console.log(res)
        
    }

    deleteUser= async (id) => {
        //console.log(id);
        await axios.delete('http://localhost:3000/carrito/'+id);
        this.getCarrito();
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
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.carrito.map(producto => (
                                
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={producto.id} 
                                    onDoubleClick={()=>this.deleteUser(producto.id)} 
                                    onClick={()=>this.cargarDatosProducto(producto.id,producto.producto,producto.precio,producto.descripción)}
                                    >
                                    
                                    {producto.producto}<br/>
                                    {producto.precio}
                                    
                                    
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
