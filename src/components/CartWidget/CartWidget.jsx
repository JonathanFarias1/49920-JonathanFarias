import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
           <i className="material-icons"><ShoppingCartIcon /><span className="item-count">3</span></i>
        </div>
  )
}

export default CartWidget