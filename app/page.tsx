import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Numbers from "./components/Numbers";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Modal from "./components/Modal"

export default function Home() {
  return (
    <>
      <Navbar />
      <Modal />
      <Landing />
      <Features />
      <Numbers />
      <Reviews />
      <Footer />
    </>
  );
}