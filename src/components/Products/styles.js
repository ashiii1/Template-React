import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  mainPage: { flexGrow: 1, overflowX: "hidden", overflowY: "hidden" },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(20),
    paddingTop: theme.spacing(20),
  },
  hero: {
    flexDirection: "column",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    backgroundColor: "white",
  },
  heroCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url('https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "40vh", // Adjust height as needed
    padding: `${theme.spacing(4)}px 0`, // Add padding top and bottom
    textAlign: "center",
    color: "#001524",
    marginTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(4)}px)`, // Move closer to the navbar
  },
  heroHeader: {
    fontSize: 48,
    fontFamily: "Poppins",
    fontWeight: "800",
    letterSpacing: -2,
    lineHeight: 0.9,
    wordSpacing: 4,
    width: 860,
    paddingBottom: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Add background color for better readability
    margin: "auto", // Center horizontally
  },
  heroDesc: {
    fontSize: 24,
    fontFamily: "Raleway",
    width: 284,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Add background color for better readability
    margin: "auto", // Center horizontally
    marginTop: theme.spacing(2), // Adjust top margin as needed
    padding: theme.spacing(2),
  },
  contentHeader: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "bolder",
    paddingTop: theme.spacing(5),
    backgroundColor: "#001524",
    margin: "0 !important",
    letterSpacing: "-.8px",
    wordSpacing: "4px",
  },
  contentFeatured: {
    gap: 15,
    padding: theme.spacing(5),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#001524",
  },
  categoryFeatured: {
    gap: 15,
    padding: theme.spacing(5),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#FFF",
  },
  carouselSection: {
    display: "none",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFF",
    gap: 28,
    paddingBottom: 28,
  },
  categorySection: {
    backgroundColor: "#FFF",
    paddingTop: theme.spacing(0.2),
    paddingBottom: theme.spacing(18),
    marginTop: theme.spacing(4), // Adjust margin-top to move categories closer to hero section
  },
  categoryName: {
    fontFamily: "Poppins",
    color: "#001524",
    fontSize: 20,
    fontWeight: 500,
  },
  categoryHeader: {
    textAlign: "center",
    color: "#001524",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "bolder",
    letterSpacing: "-.8px",
    wordSpacing: "4px",
  },
  categoryDesc: {
    textAlign: "center",
    color: "#455A64",
    fontSize: 20,
    paddingBottom: theme.spacing(2),
    fontFamily: "Raleway",
  },
  categoryNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  categoryContainer: {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    padding: theme.spacing(1),
    gap: theme.spacing(2),
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  categoryButton: {
    width: "150px",
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    outline: "none",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  scrollButton: {
    background: "transparent",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#000",
    outline: "none",
    transition: "border-color 0.3s, color 0.3s",
    "&:hover": {
      borderColor: "#f1361d",
      color: "#f1361d",
    },
  },
  root: {
    flexGrow: 1,
  },
  searchs: {
    justifyContent: "center",
    display: "flex",
  },
  searchb: {
    backgroundColor: "white",
    height: "80%",
    width: "60%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #001524",
  },
  booksHeader: {
    textAlign: "center",
    color: "#001524",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "bolder",
    paddingTop: theme.spacing(10),
    letterSpacing: "-.8px",
    wordSpacing: "4px",
  },
  booksDesc: {
    textAlign: "center",
    color: "#455A64",
    fontSize: 20,
    paddingBottom: theme.spacing(2),
    fontFamily: "Raleway",
  },
  scrollImg: {
    position: "absolute",
    right: 0,
    bottom: 40,
    height: 100,
  },
  mobileSearch: {
    display: "none",
  },
  "@media (max-width: 1600px)": {
    hero: {
      flexDirection: "column",
      height: "100vh",
      gap: 0,
      paddingTop: 0,
      justifyContent: "center",
    },
    heroHeader: {
      textAlign: "center",
      color: "#001524",
      fontSize: 60,
      fontFamily: "Poppins",
      fontWeight: "800",
      letterSpacing: -2,
      lineHeight: 1,
      wordSpacing: 4,
      width: 600,
      paddingBottom: 8,
    },
    heroDesc: {
      textAlign: "center",
      color: "#455A64",
      fontSize: 24,
      fontFamily: "Raleway",
      paddingBottom: 28,
      width: 584,
    },
    searchs: {
      justifyContent: "center",
    },
    heroImg: {
      height: 480,
    },
    content: {
      padding: 8,
    },
  },
  "@media (max-width: 700px)": {
    hero: {
      flexDirection: "column",
      height: "100vh",
      gap: 20,
      paddingTop: 0,
    },
    heroCont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    heroHeader: {
      textAlign: "center",
      color: "#001524",
      fontSize: 32,
      fontFamily: "Poppins",
      fontWeight: "800",
      letterSpacing: -1.2,
      lineHeight: 1,
      wordSpacing: 4,
      width: 332,
      paddingBottom: 8,
    },
    heroDesc: {
      textAlign: "center",
      color: "#455A64",
      fontSize: 14,
      fontFamily: "Raleway",
      paddingBottom: 28,
      width: 320,
    },
    contentHeader: {
      fontSize: 32,
    },
    booksDesc: {
      fontSize: 12,
    },
    booksHeader: {
      fontSize: 32,
    },
    searchs: {
      display: "none",
    },
    mobileSearch: {
      display: "block",
      padding: 32,
      paddingTop: 20,
    },
    mobSearchs: {
      justifyContent: "center",
      display: "flex",
    },
    mobSearchb: {
      backgroundColor: "white",
      height: "80%",
      width: "80%",
      padding: "12px",
      borderRadius: "5px",
      border: "1px solid #001524",
    },
    heroImg: {
      height: 280,
    },
    content: {
      padding: 4,
    },
    contentFeatured: {
      gap: 0,
      padding: theme.spacing(0),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(7),
    },
    categoryFeatured: {
      gap: 0,
      padding: theme.spacing(0),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(7),
    },
    scrollImg: {
      position: "absolute",
      textAlign: "center",
      margin: "auto",
      left: 0,
      right: 0,
      bottom: 20,
      height: 100,
    },
    carouselSection: {
      display: "block",
      backgroundColor: "#FFF",
    },
    buttonSection: {
      display: "none",
    },
    categoryHeader: {
      fontSize: 32,
    },

    categoryDesc: {
      fontSize: 14,
    },
  },
}));
export default useStyles;