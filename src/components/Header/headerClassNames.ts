const headerClassNames = {
  header: "fixed w-full top-0 left-0 z-20 bg-gray-900 bg-opacity-75 text-white",
  container: "container mx-auto py-4 px-6 flex items-center justify-between",
  logoContainer: "flex items-center",
  logo: "text-xl hover:text-primary-light",
  nav: "",
  ul: "flex space-x-6",
  li: "",
  link: "hover:text-yellow-700 relative ",
  cart: "absolute inline-flex items-center justify-center w-6 h-6 text-xs text-black bg-yellow-300 border-2 border-black rounded-full -top-2 -right-2",
  contactUs: "px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  orders: "px-6 py-2 bg-primary hover:bg-primary-dark",
  signupBtn:
    "bg-yellow-300 mr-4 hover:bg-yellow-700 text-black py-2 px-4",
  signinBtn:
    "bg-black flex hover:bg-gray-700 text-white py-2 px-4",
  logoutBtn:
    "bg-black ml-4 flex hover:bg-gray-700 text-white py-2 px-4",
};

export default headerClassNames;
