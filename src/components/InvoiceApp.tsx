import { getInvoice } from "../services/getInvoice";


const InvoiceApp = () => {

    const invoice = getInvoice();

    return (
        <>
            <h1>Invoice app</h1>
            <ul>
                <li>id: {invoice.id}</li>
                <li>name: {invoice.name}</li>
            </ul>
        </>
    )
}

export default InvoiceApp