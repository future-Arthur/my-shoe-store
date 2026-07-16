
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function AddToWishList({ product, loadWishList, wishListIds }) {

    const [isWished, setIsWished] = useState(wishListIds.includes(product.id));

    useEffect(() => {
        setIsWished(wishListIds.includes(product.id))
    }, [wishListIds, product.id])

    const addToWishList = async () => {
        try {
            if (isWished) {
                await axios.delete(`https://my-shoe-store-backend.onrender.com/api/wishlist/${product.id}`)
                await setIsWished(false);
            } else {
                await axios.post('https://my-shoe-store-backend.onrender.com/api/wishlist', {
                    productId: product.id
                })
                await setIsWished(true)
            }
            toast.success("Added to wishlist")
            await loadWishList();
        } catch (error) {
            console.error(`Error updating wishlist : ${error}`)
            toast.error("Failed to add to wishlist")
        }

    }

    return (
        <button className="cursor-pointer absolute w-10 h-20 lg:opacity-0 transition-opacity duration-1000 lg:group-hover:opacity-100"
            onClick={addToWishList}>
            <img src={`https://my-shoe-store-backend.onrender.com/images/icons/${isWished ? "heart-solid" : "heart-regular"}.png`} className={` ${isWished ? "h-10" : "h-9"} duration-100`} />
        </button>
    )
}