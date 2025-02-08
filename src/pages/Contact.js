import { useLayoutEffect } from "react";
import Request from "../components/Request";
import Footer from "../components/Footer";

function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Request />
      <Footer />
    </div>
  );
}

export default Contact;
