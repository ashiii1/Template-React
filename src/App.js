// import React, { useState, useEffect } from "react";
// import { CssBaseline } from "@material-ui/core";
// import { commerce } from "./lib/commerce";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";
// import Cart from "./components/Cart/Cart";
// import Checkout from "./components/CheckoutForm/Checkout/Checkout";
// import ProductView from "./components/ProductView/ProductView";
// import Manga from "./components/Manga/Manga";
// import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import loadingImg from "./assets/loader.gif";
// import "./style.css";
// import Fiction from "./components/Fiction/Fiction";
// import Biography from "./components/Bio/Biography";

// const App = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [products, setProducts] = useState([]);
//   const [mangaProducts, setMangaProducts] = useState([]);
//   const [fictionProducts, setFictionProducts] = useState([]);
//   const [bioProducts, setBioProducts] = useState([]);
//   const [featureProducts, setFeatureProducts] = useState([]);
//   const [cart, setCart] = useState({});
//   const [order, setOrder] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchProducts = async () => {
//     const { data } = await commerce.products.list();

//     setProducts(data);
//   };

//   const fetchMangaProducts = async () => {
//     const { data } = await commerce.products.list({
//       category_slug: ["manga"],
//     });

//     setMangaProducts(data);
//   };

//   const fetchFeatureProducts = async () => {
//     const { data } = await commerce.products.list({
//       category_slug: ["featured"],
//     });

//     setFeatureProducts(data);
//   };

//   const fetchFictionProducts = async () => {
//     const { data } = await commerce.products.list({
//       category_slug: ["fiction"],
//     });

//     setFictionProducts(data);
//   };

//   const fetchBioProducts = async () => {
//     const { data } = await commerce.products.list({
//       category_slug: ["biography"],
//     });

//     setBioProducts(data);
//   };

//   const fetchCart = async () => {
//     setCart(await commerce.cart.retrieve());
//   };

//   const handleAddToCart = async (productId, quantity) => {
//     const item = await commerce.cart.add(productId, quantity);

//     setCart(item.cart);
//   };

//   const handleUpdateCartQty = async (lineItemId, quantity) => {
//     const response = await commerce.cart.update(lineItemId, { quantity });

//     setCart(response.cart);
//   };

//   const handleRemoveFromCart = async (lineItemId) => {
//     const response = await commerce.cart.remove(lineItemId);

//     setCart(response.cart);
//   };

//   const handleEmptyCart = async () => {
//     const response = await commerce.cart.empty();

//     setCart(response.cart);
//   };

//   const refreshCart = async () => {
//     const newCart = await commerce.cart.refresh();

//     setCart(newCart);
//   };

//   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
//     try {
//       const incomingOrder = await commerce.checkout.capture(
//         checkoutTokenId,
//         newOrder
//       );

//       setOrder(incomingOrder);

//       refreshCart();
//     } catch (error) {
//       setErrorMessage(error.data.error.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchFeatureProducts();
//     fetchCart();
//     fetchMangaProducts();
//     fetchFictionProducts();
//     fetchBioProducts();
//   }, []);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   return (
//     <div>
//       {products.length > 0 ? (
//         <>
//           <Router>
//             <div style={{ display: "flex" }}>
//               <CssBaseline />
//               <Navbar
//                 totalItems={cart.total_items}
//                 handleDrawerToggle={handleDrawerToggle}
//               />
//               <Switch>
//                 <Route exact path="/">
//                   <Products
//                     products={products}
//                     featureProducts={featureProducts}
//                     onAddToCart={handleAddToCart}
//                     handleUpdateCartQty
//                   />
//                 </Route>
//                 <Route exact path="/cart">
//                   <Cart
//                     cart={cart}
//                     onUpdateCartQty={handleUpdateCartQty}
//                     onRemoveFromCart={handleRemoveFromCart}
//                     onEmptyCart={handleEmptyCart}
//                   />
//                 </Route>
//                 <Route path="/checkout" exact>
//                   <Checkout
//                     cart={cart}
//                     order={order}
//                     onCaptureCheckout={handleCaptureCheckout}
//                     error={errorMessage}
//                   />
//                 </Route>
//                 <Route path="/product-view/:id" exact>
//                   <ProductView />
//                 </Route>
//                 <Route path="/manga" exact>
//                   <Manga
//                     mangaProducts={mangaProducts}
//                     onAddToCart={handleAddToCart}
//                     handleUpdateCartQty
//                   />
//                 </Route>
//                 <Route path="/fiction" exact>
//                   <Fiction
//                     fictionProducts={fictionProducts}
//                     onAddToCart={handleAddToCart}
//                     handleUpdateCartQty
//                   />
//                 </Route>
//                 <Route path="/biography" exact>
//                   <Biography
//                     bioProducts={bioProducts}
//                     onAddToCart={handleAddToCart}
//                     handleUpdateCartQty
//                   />
//                 </Route>
//               </Switch>
//             </div>
//           </Router>
//           <Footer />
//         </>
//       ) : (
//         <div className="loader">
//           <img src={loadingImg} alt="Loading" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import ProductView from "./components/ProductView/ProductView";
import Manga from "./components/Manga/Manga";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import loadingImg from "./assets/loader.gif";
import "./style.css";
import Fiction from "./components/Fiction/Fiction";
import Biography from "./components/Bio/Biography";
import Fantasy from "./components/Fantasy/Fantasy";
import ScienceFiction from "./components/ScienceFiction/ScienceFiction";
import Romance from "./components/Romance/Romance";
import Mystery from "./components/Mystery/Mystery";
import Thriller from "./components/Thriller/Thriller";
import NonFiction from "./components/NonFiction/NonFiction";
import HistoricalFiction from "./components/HistoricalFiction/HistoricalFiction";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [mangaProducts, setMangaProducts] = useState([]);
  const [fictionProducts, setFictionProducts] = useState([]);
  const [bioProducts, setBioProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [fantasyProducts, setFantasyProducts] = useState([]);
  const [scienceFictionProducts, setScienceFictionProducts] = useState([]);
  const [romanceProducts, setRomanceProducts] = useState([]);
  const [mysteryProducts, setMysteryProducts] = useState([]);
  const [thrillerProducts, setThrillerProducts] = useState([]);
  const [nonFictionProducts, setNonFictionProducts] = useState([]);
  const [historicalFictionProducts, setHistoricalFictionProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchMangaProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["manga"],
    });

    setMangaProducts(data);
  };

  const fetchFeatureProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["featured"],
    });

    setFeatureProducts(data);
  };

  const fetchFictionProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["fiction"],
    });

    setFictionProducts(data);
  };

  const fetchBioProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["biography"],
    });

    setBioProducts(data);
  };

  const fetchFantasyProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["fantasy"],
    });

    setFantasyProducts(data);
  };

  const fetchScienceFictionProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["science-fiction"],
    });

    setScienceFictionProducts(data);
  };

  const fetchRomanceProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["romance"],
    });

    setRomanceProducts(data);
  };

  const fetchMysteryProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["mystery"],
    });

    setMysteryProducts(data);
  };

  const fetchThrillerProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["thriller"],
    });

    setThrillerProducts(data);
  };

  const fetchNonFictionProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["non-fiction"],
    });

    setNonFictionProducts(data);
  };

  const fetchHistoricalFictionProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["historical-fiction"],
    });

    setHistoricalFictionProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchFeatureProducts();
    fetchCart();
    fetchMangaProducts();
    fetchFictionProducts();
    fetchBioProducts();
    fetchFantasyProducts();
    fetchScienceFictionProducts();
    fetchRomanceProducts();
    fetchMysteryProducts();
    fetchThrillerProducts();
    fetchNonFictionProducts();
    fetchHistoricalFictionProducts();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Router>
            <div style={{ display: "flex" }}>
              <CssBaseline />
              <Navbar
                totalItems={cart.total_items}
                handleDrawerToggle={handleDrawerToggle}
              />
              <Switch>
                <Route exact path="/">
                  <Products
                    products={products}
                    featureProducts={featureProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route exact path="/cart">
                  <Cart
                    cart={cart}
                    onUpdateCartQty={handleUpdateCartQty}
                    onRemoveFromCart={handleRemoveFromCart}
                    onEmptyCart={handleEmptyCart}
                  />
                </Route>
                <Route path="/checkout" exact>
                  <Checkout
                    cart={cart}
                    order={order}
                    onCaptureCheckout={handleCaptureCheckout}
                    error={errorMessage}
                  />
                </Route>
                <Route path="/product-view/:id" exact>
                  <ProductView />
                </Route>
                <Route path="/manga" exact>
                  <Manga
                    mangaProducts={mangaProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/fiction" exact>
                  <Fiction
                    fictionProducts={fictionProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/biography" exact>
                  <Biography
                    bioProducts={bioProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/fantasy" exact>
                  <Fantasy
                    fantasyProducts={fantasyProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/science-fiction" exact>
                  <ScienceFiction
                    scienceFictionProducts={scienceFictionProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/romance" exact>
                  <Romance
                    romanceProducts={romanceProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/mystery" exact>
                  <Mystery
                    mysteryProducts={mysteryProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/thriller" exact>
                  <Thriller
                    thrillerProducts={thrillerProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/non-fiction" exact>
                  <NonFiction
                    nonFictionProducts={nonFictionProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route path="/historical-fiction" exact>
                  <HistoricalFiction
                    historicalFictionProducts={historicalFictionProducts}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </>
      ) : (
        <div className="loader">
          <img src={loadingImg} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default App;
