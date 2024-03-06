import Comment from "../components/Comment/Comment";
import Tools from "../components/Home/Tools";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Home/Team";
import Card from "../components/Home/Payment/card";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1524292332709-b33366a7f165?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Walk with us & Never regret"
        text="We will provide you best services and belief"
        buttonText="Join us now"
        url="/"
        btnClass="show"
      />
      <Tools />
      <Comment />
      <Team />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
