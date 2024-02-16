import { useEffect, useState, useLayoutEffect } from "react";
import { FaBed, FaBath, FaChartArea } from "react-icons/fa";
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
    <div className=" bg-[#f6f5f5] pt-[2rem] mt-[5rem]">
      <div className="container">
        <h1 className="text-4xl font-medium p-2 mb-5 text-center text-[#754400] md:text-6xl md:mb-14 lg:text-7xl">
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
                <div className="w-[28rem] mb-10 bg-white rounded-xl transition ease-in-out hover:scale-105 md:w-[32rem] lg:mb-14">
                  <div className="w-[28rem] h-[19rem] mb-2 md:w-[32rem]">
                    <img
                      src={item.coverPhoto.url}
                      alt="apartment"
                      className="w-[100%] h-[100%] object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-2 md:p-4">
                    <h2 className="text-xl font-medium text-[#754400] md:text-2xl md:mb-2">
                      {item.title.length > 34
                        ? item.title.slice(0, 35) + `...`
                        : item.title}
                    </h2>
                    <h5 className="text-[1.3rem] md:text-[1.8rem]">
                      {item.agency.name}
                    </h5>
                    <div className="flex border-b-[1px] border-black p-1 justify-between">
                      <p className="flex items-center text-xl md:text-[1.5rem]">
                        {" "}
                        <FaBed
                          size={18}
                          className="text-[#754400]"
                        /> &nbsp; {item.rooms}
                      </p>
                      <p className="flex items-center text-xl md:text-[1.5rem]">
                        {" "}
                        <FaBath
                          size={18}
                          className="text-[#754400]"
                        /> &nbsp; {item.baths}
                      </p>
                      <p className="flex items-center text-xl md:text-[1.5rem]">
                        {" "}
                        <FaChartArea
                          size={18}
                          className="text-[#754400]"
                        />{" "}
                        &nbsp; {millify(item.area)} sqft
                      </p>
                    </div>
                    <p className="py-2 text-xl md:text-[1.5rem]">
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
