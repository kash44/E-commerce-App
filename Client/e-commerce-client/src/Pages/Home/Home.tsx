import Announcement from "../../Components/Announcement/Announcement";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Products from "../../Components/Products/Products";
import Slider from "../../Components/Slider/Slider";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      {/* <Products category={category} filters={filters} sort={sort} /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
