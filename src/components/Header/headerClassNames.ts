const headerClassNames = {
  header: "fixed w-full top-0 left-0 z-20 bg-black bg-opacity-75 text-white h-200",
  container: "container mx-auto py-4 px-6 flex items-center justify-between",
  logoContainer: "flex items-center",
  logo: "text-xl hover:text-primary-light",
  nav: "",
  ul: "flex space-x-6",
  li: "",
  link: "hover:text-yellow-300 relative ",
  cart: "absolute inline-flex items-center justify-center w-6 h-6 text-xs text-black bg-yellow-300 border-2 border-black rounded-full -top-2 -right-2",
  contactUs: "px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  orders: "px-6 py-2 bg-yellow-300 hover:bg-primary-dark text-black",
  signupBtn:
    "bg-yellow-300 mr-4 hover:bg-yellow-700 text-black py-1 px-2 transition-all duration-200",
  signinBtn:
    "bg-black flex hover:bg-gray-700 text-white py-1 px-2 transition-all duration-200",
  logoutBtn:
    "bg-black ml-4 flex hover:bg-gray-700 text-white py-2 px-2 transition-all duration-200",
};

export default headerClassNames;
