import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from '@restart/ui/esm/Button';

export default  function AddProduct(props){

    const stateInicialForm = {
        nombre: "",
        marca: "",
        precio: "",
      };
    

    const [stateForm, setStateForm] = useState(stateInicialForm);
  
    const gestionar_Form = event =>{
        const {name, value} = event.target;
        setStateForm({...stateForm, [name]:value});
    }
      
    const onSubmitForm = ev =>{
        ev.preventDefault();
        props.Agregar(stateForm);
    
        setStateForm(stateInicialForm);
    }

    const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
    
    return(
            <div className="col-4 py-2">
                <button type="submit" className="btn btn-primary" onClick={handleShow}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-node-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                </svg> Agregar producto</button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>DATOS DEL PRODUCTO</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                        <div className="col-10">
                            <div className="mb-3">
                                <label htmlFor ="nombreProduct" className="form-label">NOMBRE</label>
                                <input type="text" name = "nombre" className="form-control" id="nombreProduct" value = {stateForm.nombre} onChange = {gestionar_Form}/>
                            </div>
                        </div>

                        <div className="col-10">
                            <div className="mb-3">
                                <label htmlFor ="marcaProduct" className="form-label">MARCA</label>
                                <input type="text" name = "marca" className="form-control" id="marcaProduct" value = {stateForm.marca} onChange = {gestionar_Form}/>
                            </div>
                        </div>

                        <div className="col-10">
                            <div className="mb-3">
                                <label htmlFor ="precioProduct" className="form-label">Precio</label>
                                <input type="text" name="precio" className="form-control" id="precioProduct" value = {stateForm.precio} onChange = {gestionar_Form}/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary" onClick ={onSubmitForm}>Agregar</button> 
                            <label id="Color_Label">EspacioTexto</label>
                            <Link to= '/' id="Color_Text">
                            <button  className="btn btn-primary" onClick={handleClose}>Cancelar</button>
                            </Link>
                        </div>
                    </form>
                  </Modal.Body>
                  
                </Modal>
              </div>
            );
          
}
/* 


<form>

            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor ="nombreProduct" className="form-label">NOMBRE</label>
                    <input type="text" name = "nombre" className="form-control" id="nombreProduct" value = {stateForm.nombre} onChange = {gestionar_Form}/>
                </div>
            </div>

            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor ="marcaProduct" className="form-label">MARCA</label>
                    <input type="text" name = "marca" className="form-control" id="marcaProduct" value = {stateForm.marca} onChange = {gestionar_Form}/>
                </div>
            </div>

            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor ="precioProduct" className="form-label">Precio</label>
                    <input type="text" name="precio" className="form-control" id="precioProduct" value = {stateForm.precio} onChange = {gestionar_Form}/>
                </div>
            </div>
            
            <div>
                <button type="submit" className="btn btn-primary" onClick ={onSubmitForm}>Agregar</button> 
                <label id="Color_Label">EspacioTexto</label>
                <Link to= '/' id="Color_Text">
                <button  className="btn btn-primary">Cancelar</button>
                </Link>
            </div>
            
        </form>*/