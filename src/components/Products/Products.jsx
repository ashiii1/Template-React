// import React, { useState, useRef } from "react";
// import { Grid, InputAdornment, Input } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
// import Product from "./Product/Product.js";
// import useStyles from "./styles";
// // import logo1 from "../../assets/Bookshop.gif";
// // import scrollImg from "../../assets/scroll.gif";
// import "../ProductView/style.css";
// import { Link } from "react-router-dom";
// import mangaBg from "../../assets/maxresdefault.jpg";
// import bioBg from "../../assets/biography.jpg";
// import fictionBg from "../../assets/fiction.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// const Products = ({ products, onAddToCart, featureProducts }) => {
//   const classes = useStyles();
//   const [searchTerm, setSearchTerm] = useState("");
//   const sectionRef = useRef(null);

//   const handleInputClick = () => {
//     // Scrolls to the section when the input is clicked
//     sectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <main className={classes.mainPage}>
//       <div className={classes.toolbar} />
//       {/* <img src={scrollImg} className={classes.scrollImg} /> */}
//       <div className={classes.hero}>
//         {/* <img className={classes.heroImg} src={logo1} height="720px" /> */}
//         <div className={classes.heroCont}>
//           <h1 className={classes.heroHeader}>
//             Discover Your Next Favorite Book Here.
//           </h1>
//           <h3 className={classes.heroDesc} ref={sectionRef}>
//             Explore our curated collection of new and popular books to find your
//             next literary adventure.
//           </h3>
//           <div className={classes.searchs}>
//             <Input
//               className={classes.searchb}
//               type="text"
//               placeholder="Which book are you looking for?"
//               onClick={handleInputClick}
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               }
//             />
//           </div>
//         </div>
//       </div>

//       {searchTerm === "" && (
//         <div className={classes.categorySection}>
//           <h1 className={classes.categoryHeader}>Categories</h1>
//           <h3 className={classes.categoryDesc}>
//             Browse our featured categories
//           </h3>
//           <div className={classes.buttonSection}>
//             <div>
//               <Link to="manga">
//                 <button
//                   className={classes.categoryButton}
//                   style={{ backgroundImage: `url(${mangaBg})` }}
//                 ></button>
//               </Link>
//               <div className={classes.categoryName}>Manga</div>
//             </div>
//             <div>
//               <Link to="biography">
//                 <button
//                   className={classes.categoryButton}
//                   style={{ backgroundImage: `url(${bioBg})` }}
//                 ></button>
//               </Link>
//               <div className={classes.categoryName}>Biography</div>
//             </div>
//             <div>
//               <Link to="fiction">
//                 <button
//                   className={classes.categoryButton}
//                   style={{ backgroundImage: `url(${fictionBg})` }}
//                 ></button>
//               </Link>
//               <div className={classes.categoryName}>Fiction</div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className={classes.carouselSection}>
//         <Carousel
//           showIndicators={false}
//           autoPlay={true}
//           infiniteLoop={true}
//           showArrows={true}
//           showStatus={false}
//         >
//           {/* Directly use <img> tags with src attributes */}
//           <div>
//             <img className={classes.categoryButton} src={mangaBg} alt="Manga" />
//             <div className={classes.categoryName}>Manga</div>
//           </div>
//           <div>
//             <img className={classes.categoryButton} src={bioBg} alt="Biography" />
//             <div className={classes.categoryName}>Biography</div>
//           </div>
//           <div>
//             <img className={classes.categoryButton} src={fictionBg} alt="Fiction" />
//             <div className={classes.categoryName}>Fiction</div>
//           </div>
//         </Carousel>
//       </div>

//       {searchTerm === "" && (
//         <>
//           <div>
//             <h3 className={classes.contentHeader}>
//               Best <span style={{ color: "#f1361d" }}>Sellers</span>
//             </h3>
//             <Grid
//               className={classes.contentFeatured}
//               container
//               justifyContent="center"
//               spacing={1}
//             >
//               {featureProducts.map((product) => (
//                 <Grid
//                   className={classes.contentFeatured}
//                   item
//                   xs={6}
//                   sm={5}
//                   md={3}
//                   lg={2}
//                   key={product.id} // Ensure each grid item has a unique key
//                 >
//                   <Product product={product} onAddToCart={onAddToCart} />
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         </>
//       )}

//       <div>
//         {searchTerm === "" && (
//           <>
//             <h1 className={classes.booksHeader}>
//               Discover <span style={{ color: "#f1361d" }}>Books</span>
//             </h1>
//             <h3 className={classes.booksDesc}>
//               Explore our comprehensive collection of books.
//             </h3>
//           </>
//         )}
//         <div className={classes.mobileSearch}>
//           <div className={classes.mobSearchs}>
//             <Input
//               className={classes.mobSearchb}
//               type="text"
//               placeholder="Search for books"
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               }
//             />
//           </div>
//         </div>
//         <Grid
//           className={classes.content}
//           container
//           justifyContent="center"
//           spacing={2}
//         >
//           {products
//             .filter((product) =>
//               searchTerm === "" ||
//               product.name.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map((product) => (
//               <Grid
//                 className={classes.content}
//                 item
//                 xs={6}
//                 sm={6}
//                 md={4}
//                 lg={3}
//                 key={product.id} // Ensure each grid item has a unique key
//               >
//                 <Product product={product} onAddToCart={onAddToCart} />
//               </Grid>
//             ))}
//         </Grid>
//       </div>
//     </main>
//   );
// };

// export default Products;
import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";

import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// URLs for category images
const mangaBg =
  "https://i.pinimg.com/736x/a2/d7/cf/a2d7cfaa19ea2704a2f47b5b8764d0dc.jpg";
const bioBg =
  "https://i.pinimg.com/736x/1c/70/c4/1c70c468e12564ab632a54ae16c0f64e.jpg";
const fictionBg =
  "https://www.fivespotgreenliving.com/images/blog-top-fiction-books-to-read.jpg";
const fantasyBg =
  "https://i.pinimg.com/736x/7f/82/4d/7f824d07119364dadc42f497e7aeb756.jpg";
const scienceFictionBg =
  "https://i.pinimg.com/originals/15/29/7a/15297acdd5e8bbcedb6c3023c6732c9b.png";
const romanceBg =
  "https://i.pinimg.com/originals/5c/ad/7f/5cad7fd56173b88e4a49b7bb7b4e4467.jpg"
const mysteryBg =
  "https://i.pinimg.com/originals/61/ce/61/61ce6101515b6fa87b9aa0b21a08d25f.png";
const thrillerBg =
  "https://i.pinimg.com/originals/65/ad/56/65ad569c18621b7e0520a55f9358d47f.jpg"
const nonFictionBg =
  "https://www.pragmaticmom.com/wp-content/uploads/2017/02/nonfiction-books-for-kids.jpg";
const historicalFictionBg = 
  "http://prodimage.images-bn.com/pimages/2940012897831_p0_v1_s1200x630.jpg";


const Products = ({ products, onAddToCart, featureProducts }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const sectionRef = useRef(null);
  const categoryRef = useRef(null);

  const handleInputClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({
        left: -250, // Adjust this value according to your design
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({
        left: 250, // Adjust this value according to your design
        behavior: "smooth",
      });
    }
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      <div className={classes.hero}>
        <div className={classes.heroCont}>
        {/* <img
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        alt="Nature"
        style={{ width: "60%", height: "40%", objectFit: "cover" }}
      /> */}
          <h1 className={classes.heroHeader}>
            Discover Your Next Favorite Book Here.
          </h1>
          <div className={classes.searchs}>
            <Input
              className={classes.searchb}
              type="text"
              placeholder="Search For Books "
              onClick={handleInputClick}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
            </div>
             <h3 className={classes.heroDesc} ref={sectionRef}>
          Welcome to Book Haven, your BookShop site for all types of books! Find your perfect read today.
          </h3>
        
        </div>
      </div>

      {searchTerm === "" && (
        <div className={classes.categorySection}>
          <h1 className={classes.categoryHeader}>Categories</h1>
          <div className={classes.categoryNav}>
            <button className={classes.scrollButton} onClick={handleScrollLeft}>
              &lt;
            </button>
            <div className={classes.categoryContainer} ref={categoryRef}>
              <div className={classes.buttonSection}>
                {/* Category Buttons */}
                <div>
                  <Link to="manga">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${mangaBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Manga</div>
                </div>
                <div>
                  <Link to="biography">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${bioBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Biography</div>
                </div>
                <div>
                  <Link to="fiction">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${fictionBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Fiction</div>
                </div>
                <div>
                  <Link to="fantasy">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${fantasyBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Fantasy</div>
                </div>
                <div>
                  <Link to="science-fiction">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${scienceFictionBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Science Fiction</div>
                </div>
                <div>
                  <Link to="romance">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${romanceBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Romance</div>
                </div>
                <div>
                  <Link to="mystery">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${mysteryBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Mystery</div>
                </div>
                <div>
                  <Link to="thriller">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${thrillerBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Thriller</div>
                </div>
                <div>
                  <Link to="non-fiction">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${nonFictionBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Non-Fiction</div>
                </div>
                <div>
                  <Link to="historical-fiction">
                    <button
                      className={classes.categoryButton}
                      style={{ backgroundImage: `url(${historicalFictionBg})` }}
                    ></button>
                  </Link>
                  <div className={classes.categoryName}>Historical Fiction</div>
                </div>
              </div>
            </div>
            <button
              className={classes.scrollButton}
              onClick={handleScrollRight}
            >
              &gt;
            </button>
          </div>
        </div>
      )}

      {searchTerm === "" && (
        <>
          <div>
            <h3 className={classes.contentHeader}>
              Best <span style={{ color: "#cc0aa8" }}>Sellers</span>
            </h3>
            <Grid
              className={classes.contentFeatured}
              container
              justifyContent="center"
              spacing={1}
            >
              {featureProducts.map((product) => (
                <Grid
                  className={classes.contentFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  key={product.id}
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}

      <div>
        {searchTerm === "" && (
          <>
            <h1 className={classes.booksHeader}>
              Discover <span style={{ color: "#ac09b2" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>
              Explore our comprehensive collection of books.
            </h3>
          </>
        )}
        <div className={classes.mobileSearch}>
          <div className={classes.mobSearchs}>
            <Input
              className={classes.mobSearchb}
              type="text"
              placeholder="Search for books"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
        </div>
        <Grid className={classes.content} container justifyContent="center" spacing={2}>
          {products
            .filter(
              (product) =>
                searchTerm === "" ||
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
