const { useRouter } = require("next/router")

function ProductDetails(){
    const router = useRouter();
    const {productId} = router.query;

    return <h1>This is details about product number {productId}</h1>
}

export default ProductDetails