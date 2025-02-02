// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Badge,
//   Typography,
// } from "@material-ui/core";
// import { ShoppingCart } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import logo from "../../assets/circles.png";
// import useStyles from "./styles";

// const Navbar = ({ totalItems }) => {
//   const classes = useStyles();

//   return (
//     <div>
//       <AppBar position="fixed" className={classes.appBar} color="white">
//         <Toolbar>
//           <Typography
//             component={Link}
//             to="/"
//             variant="h5"
//             className={classes.title}
//             color="inherit"
//           >
//             <img
//               src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnywqjMLWBSefb3MPTYXNnT6p5voyIU0YBw&s'}
//               alt="Book Store App"
//               height="50px"
//               width="60px"
//               className={classes.image}
//             />
//             <div>BOOKSHELF</div>
//           </Typography>

//           <div className={classes.grow} />
//           <div className={classes.button}>
//             <IconButton
//               component={Link}
//               to="/cart"
//               aria-label="Show cart items"
//               color="inherit"
//             >
//               <Badge badgeContent={totalItems} color="secondary">
//                 <ShoppingCart />
//               </Badge>
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="white">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={"https://tse1.mm.bing.net/th?id=OIP.ZMiKAmmH0CZvtYl3R0LJzQHaGP&pid=Api&P=0&h=180"}
              alt="Book Store App"
              height="50px"
              width="60px"
              className={classes.image}
            />
            <div>BOOKSHELF</div>
          </Typography>

          <div className={classes.grow} />
         
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
