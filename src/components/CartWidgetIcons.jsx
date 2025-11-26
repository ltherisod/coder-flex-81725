import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
// para utilizar el contexto se importan 2 cosas 1 el contexto que quiero utilizar y otro el hook para usar contextos
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = ({counter}) => {
    // const context = useContext(CartContext)
    // console.log(context)
    return(
        <div>
            <TiShoppingCart fontSize={'1.8rem'}/>
            <Badge bg="danger">{counter}</Badge>
        </div>
    )
}
export default CartWidgetIcons