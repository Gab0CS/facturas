import { getInvoice } from "../services/getInvoice";


const InvoiceApp = () => {

    const {id, name, client, company, items } = getInvoice();


    const { name: nameClient, lastName, address } = client;
    const { country, city, street, number } = address;
    

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="container py-3">
                        <div>
                            <div className="card-header">Invoice app</div>
                            <ul className="list-group">
                                <li className="list-group-item">id: {id}</li>
                                <li className="list-group-item">name: {name}</li>
                            </ul>
                            <div className="row my-3">
                                <div className="col">
                                <h3>Datos del cliente</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item active">{nameClient} {lastName}</li>
                                        <li className="list-group-item">{country}, {city}</li>
                                        <li className="list-group-item">{street} {number}</li>
                                    </ul> 
                                </div>
                                
                                <div className="col">
                                    <h3>Datos de la empresa</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item active">{company.name}</li>
                                        <li className="list-group-item">{company.fiscalNumber}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-3">
                        <div>
                            <h4>Productos de la factura</h4>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    {items.map(item =>{
                                        return(
                                            <tr key={item.id}>
                                                <td>{item.product}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceApp