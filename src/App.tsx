import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";
import Discount from "./components/Discount";
import Blogs from "./components/Blogs";
import Footer from "./components/footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeatureProduct/>
      <Discount />
      <Blogs/>
      <Footer />
    </main>
  );
};

export default App;
