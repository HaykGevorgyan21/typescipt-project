import {Product} from "./Components/Product";
import {UseProducts} from "./Hook/Products";
import {Loader} from "./Components/Loader";
import {ErrorMessage} from "./Components/ErrorMessage";
import {Modal} from "./Components/Modal";
import {CreateProduct} from "./Components/CreateProduct.";
import {Iprdouct} from "./model";
import {useContext} from "react";
import {ModalContext} from "./Context/ModalContext";

function App() {
    const {Loading, Error, Products, addProduct} = UseProducts()
    const {modal, open, close} = useContext(ModalContext)

    const CreateHandler = (product: Iprdouct) => {
        close()
        addProduct(product)
    }
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {Loading && <Loader/>}
            {Error && <ErrorMessage Error={Error}/>}

            {Products.map((product, index) => <Product product={product} key={index}/>)}

            {modal && <Modal title='Create New Product' onClose={close}>
                <CreateProduct onCreate={CreateHandler}/>
            </Modal>}
            <button className='fixed bottom-5 right-5 rounded-full bg-red-600 text-white text-2xl px-4 py-2'
                    onClick={open}
            >
                +
            </button>
        </div>
    );
}

export default App;
