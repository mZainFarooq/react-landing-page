import { Alert } from "./components/Alert";
import Banner from "./components/Banner";
import Corousel from "./components/Corousel";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Alert />
      <Navbar />
      <Hero />
      <Corousel />
      <Banner />
      <Products />
      <Banner />
      <Corousel />
      <Footer />
    </div>
  )
}