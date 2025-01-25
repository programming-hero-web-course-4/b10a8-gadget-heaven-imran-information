import { toast } from "react-toastify";

const getToProduct = () => {
    const getProduct = localStorage.getItem('products');

    if (getProduct) {
        return JSON.parse(getProduct);
    }
    return []
}

const setProductCart = (product) => {
    const getProduct = getToProduct();
    const exist = getProduct.find((item => item.id == product.id))
    if (exist) {
        return toast.error("Already exist !", {
            position: "top-center"
        });
    }
    getProduct.push(product)
    const productStringify = JSON.stringify(getProduct)
    localStorage.setItem('products', productStringify)
    toast.success("Success Added !", {
        position: "top-center"
    });
}

const removeProduct = id => {
    const getProduct = getToProduct();
    const remaining = getProduct.filter(product => product.id != id)
    localStorage.setItem('products', JSON.stringify(remaining))
    toast.success("Success Remove !", {
        position: "top-center"
    });
}

const purchaseProduct = () => {
    const getProduct = getToProduct();
    if (getProduct.length > 0) {
        localStorage.clear('products', getProduct)

    }
    else {
        return toast.error("Please at to the cart !", {
            position: "top-center"
        });
    }
}
// handle Heart btn  
const getToHartProduct = () => {
    const getProduct = localStorage.getItem('heart');

    if (getProduct) {
        return JSON.parse(getProduct);
    }
    return []
}

const setHartProductCart = (product) => {
    const getProduct = getToHartProduct();
    const exist = getProduct.find((item => item.id == product.id))
    if (exist) {
        return toast.error("Already exist !", {
            position: "top-center"
        });
    }
    getProduct.push(product)
    const productStringify = JSON.stringify(getProduct)
    localStorage.setItem('heart', productStringify)
    toast.success("Success Added !", {
        position: "top-center"
    });
}

const removeHeartPro = (id) => {
    const getProduct = getToHartProduct();
    const remaining = getProduct.filter(product => product.id != id)
    localStorage.setItem('heart', JSON.stringify(remaining))
    toast.success("Success Remove !", {
        position: "top-center"
    });
}

const purchaseHeartProduct = () => {
    const getProduct = getToHartProduct();
    if (getProduct.length > 0) {
        localStorage.clear('products', getProduct)

    }
    else {
        return toast.error("Please at to the heart !", {
            position: "top-center"
        });
    }
}

export { setProductCart, setHartProductCart, getToProduct, getToHartProduct, removeProduct, removeHeartPro, purchaseProduct, purchaseHeartProduct }