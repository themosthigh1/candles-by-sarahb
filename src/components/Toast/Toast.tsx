"use-client";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const Toast = () => {
  return <Toaster />;
};

export default Toast;
