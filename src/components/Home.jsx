import "../styles/HomeStyles.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,800&display=swap" rel="stylesheet"></link>
      <div className="home">
        <div className="mainimg">
        <img src="https://cdn.discordapp.com/attachments/900388301154967592/1036624532200501378/1663776613007.jpg" alt="alternatetext"></img>
        </div>
        <h1 className="hometext">Home</h1>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;