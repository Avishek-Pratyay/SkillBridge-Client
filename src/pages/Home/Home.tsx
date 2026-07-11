import Hero from "../../components/home/Hero";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Categories from "../../components/home/Categories";
import WhyChoose from "../../components/home/WhyChoose";
import Statistics from "../../components/home/Statistics";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import Newsletter from "../../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
};

export default Home;