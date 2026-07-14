


export function SelectSizeButton({product, selectedSize, setSelectedSize}) {

    

    return (
        <>
            {product.size && product.size.map((size) => {

                const pickSize = () => {
                    setSelectedSize((prev) => ({
                        ...prev,
                        [product.id]: size
                    }))
                }
                return (
                    <button onClick={pickSize} key={size}
                        className={`cursor-pointer border p-2 hover:bg-brand-navy hover:text-white duration-500
                                            
                    ${selectedSize[product.id] === size ? "bg-brand-gold" : ""}`}>{size}</button>
                )
            })}
        </>
    )
}