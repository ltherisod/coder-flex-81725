import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";

const CartWidgetIcons = ({counter}) => {
    return(
        <div>
            <TiShoppingCart fontSize={'1.8rem'}/>
            <Badge bg="danger">{counter}</Badge>
        </div>
    )
}
export default CartWidgetIcons