import CardPizza from "../components/CardPizzas";
import { useContext, useEffect } from "react";
import { PizzasContext } from "../PizzasContext";

function Pizzas(){
    const { selectedPizza, consultarApiById } = useContext(PizzasContext);

    useEffect(() => {
        consultarApiById("p001");
    }, []);

    return(
        <>
            <div className="pizzas">
                {selectedPizza && (
                    <CardPizza 
                        key={selectedPizza.id}
                        id={selectedPizza.id}
                        nombre={selectedPizza.name}
                        precio={selectedPizza.price}
                        ingredientes={selectedPizza.ingredients}
                        img={selectedPizza.img}
                    />
                )}
            </div>            
        </>
    );
};

export default Pizzas;