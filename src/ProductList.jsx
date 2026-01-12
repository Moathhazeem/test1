import { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
function ProductList() {
    const cart = useSelector(state => state.cart.items);
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const plantsArray = [
        {
            category: "Best Sellers",
            plants: [
                {
                    name: "Emerald Snake",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Elegant and low-maintenance — perfect for modern interiors.",
                    cost: "$15"
                },
                {
                    name: "Garden Spider",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Hardy, fast-growing plant ideal for hanging pots.",
                    cost: "$12"
                },
                {
                    name: "White Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Graceful white blooms that brighten indoor spaces.",
                    cost: "$18"
                },
                {
                    name: "Boston Breeze",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Lush foliage that adds fresh texture to rooms.",
                    cost: "$20"
                },
                {
                    name: "Rubber Leaf",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Glossy, statement leaves for a sophisticated look.",
                    cost: "$17"
                },
                {
                    name: "Aloe Healing",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel plant with simple care needs.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "New Arrivals",
            plants: [
                {
                    name: "Evening Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Fragrant spikes, ideal for calming aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Night Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet-scented flowers that open in the evening.",
                    cost: "$18"
                },
                {
                    name: "Citrus Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Zesty herb with a bright, invigorating aroma.",
                    cost: "$15"
                },
                {
                    name: "Fresh Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Aromatic leaves perfect for tea and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Whisper",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Subtle citrus notes, lovely for patios and balconies.",
                    cost: "$14"
                },
                {
                    name: "Blue Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Seasonal blooms with a delicate, sweet scent.",
                    cost: "$22"
                }
            ]
        }

    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }
    // Calculate total cost based on quantity for an item
    const getCountItem = () => {
        let count = 0;
        cart.forEach((item) => {
            if(item.quantity > 0){
                count ++;
            }
        })
        return count;
    };
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    }
    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); // Hide the cart when navigating to Plants link
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Hazeem plant</h3>

                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div className="nav-center"> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Home</a></div>
                    <div className="cart-wrapper"> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><p className='cart_quantity_count'>{getCountItem()}</p><span className='cart_text'>basket</span></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((categ) => (
                        <div key={categ.category}>
                            <div className='plant_heading'>
                                <h2 className='plantname_heading'>{categ.category}</h2>
                            </div>
                            <div className='product-list'>
                                {categ.plants.map((plant) => (
                                    <div className='product-card' key={plant.name}>
                                        <h4 className='product-title'>{plant.name}</h4>
                                        <img className="product-img" src={plant.image} alt={plant.name} />
                                        <p className='product-price'>{plant.cost}</p>
                                        <p className='product-desc'>{plant.description}</p>
                                        <button className={`product-button ${cart.find(item => item.name === plant.name && item.quantity > 0) ? 'added-to-cart': ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                        >Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;