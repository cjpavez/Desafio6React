import { useContext } from "react";
import SelectPizza from "../components/SelectPizza";
import { CartContext } from "../CartContext";

function Cart() {
    const { cart, onIncrease, onDecrease } = useContext(CartContext);
    const total = cart.reduce((sum, p) => sum + (Number(p.price) * Number(p.count || 0)), 0);

    return(
        <>
            <div className="cartPizzas">
                <h4>Detalles del pedido</h4>
                <div>
                    {cart.map((item) => (
                        <SelectPizza 
                            key={item.id}
                            idn={item.id}
                            nombre={item.name}
                            precio={item.price}
                            cantidad={item.count}
                            imagen={item.img}
                            onIncrease={() => onIncrease(item.id)}
                            onDecrease={() => onDecrease(item.id)}
                        />
                    ))}  
                </div>        
                <h3>{`Total: $${Number(total).toLocaleString('es-CL')}`}</h3>
                <button className="cartPagar">Pagar</button>
            </div>
        </>        
    );    
};

export default Cart;