import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

function Apartments() {
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getApartments = async () => {
    setIsLoading(true);
    const check = localStorage.getItem("apartments");

    if (check) {
      setApartments(JSON.parse(check));
      setIsLoading(false);
    } else {
      const url =
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=20&page=0&lang=en&sort=city-level-score&categoryExternalID=4";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem("apartments", JSON.stringify(result.hits));
        setApartments(result.hits);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    getApartments();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="pt-[2rem] mt-[5rem] apartment-main">
      <div className="container">
        <h1 className="text-4xl font-medium p-2 m-7 text-center text-[#C88A65] tracking-widest md:text-6xl md:m-20 lg:text-7xl">
          Browse Through Our Collection
        </h1>
        <div className="grid grid-cols-1 gap-5 content-center justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {apartments.map((item) => {
            return (
              <Link
                to={"/information/" + item.externalID}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <div className="w-[28rem] p-2 mb-10 rounded-xl md:w-[35rem] xl:w-[38rem] lg:mb-14">
                  <div className="w-[28rem] h-[19rem] mb-2 md:w-[35rem] md:h-[25rem] xl:w-[38rem] xl:h-[28rem] overflow-hidden">
                    <img
                      src={item.coverPhoto.url}
                      alt="apartment"
                      className="w-[100%] h-[100%] object-cover hover:scale-105 transition ease-in-out"
                    />
                  </div>
                  <div className="p-2 md:p-4">
                    <h5 className="text-[1.3rem] md:text-[2.1rem] text-center tracking-wide">
                      {item.agency.name}
                    </h5>
                    <p className="py-2 text-xl md:text-[1.8rem] text-center text-[#C88A65] tracking-wide">
                      AED {millify(item.price)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apartments;
