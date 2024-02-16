import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaBed, FaBath, FaChartArea } from "react-icons/fa";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Neighborhood from "../components/Neighborhood";
import millify from "millify";
import Loading from "../components/Loading";

function Information() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetails = async () => {
    setIsLoading(true);

    const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${params.id}`;
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
      setDetails(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="mt-[8rem]">
      <div className="mt-10">
        <h1 className="text-2xl pl-8 font-medium md:text-4xl lg:text-5xl">
          {details.title}
        </h1>
        <p className="text-xl pl-8 md:text-2xl md:my-2 lg:text-3xl lg:my-4">
          {details.agency.name}
        </p>
        <div className="flex justify-between">
          <p className="pl-8 md:text-2xl lg:text-3xl">
            {details.purpose} | {details.type}
          </p>
          <p className="pr-8 font-semibold md:text-2xl lg:text-3xl">
            AED-{millify(details.price)}
          </p>
        </div>
        <div className="swip">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-16 max-w-[490px] md:max-w-[720px] lg:max-w-[1024px]"
          >
            {details.photos.map((item) => {
              return (
                <SwiperSlide key={item.id} className="relative">
                  <img
                    src={item.url}
                    alt="apartment"
                    className="w-[35rem] h-[22rem] rounded-t-3xl m-auto md:w-[55rem] md:h-[32rem] lg:w-[85rem] lg:h-[50rem]"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className=" bg-[#272625] border-y-[2px] border-white py-7 text-white flex justify-around md:py-9 lg:py-20">
          <p className="flex items-center text-xl md:text-4xl">
            {" "}
            <FaBed className="text-white reacticon" /> &nbsp; {details.rooms}{" "}
            Bedroom
          </p>
          <p className="flex items-center text-xl md:text-4xl">
            {" "}
            <FaBath className="text-white reacticon" /> &nbsp; {details.baths}{" "}
            Bathroom
          </p>
          <p className="flex items-center text-xl md:text-4xl">
            {" "}
            <FaChartArea className="text-white reacticon" /> &nbsp;{" "}
            {millify(details.area)} sqft
          </p>
        </div>
        <div className="min-h-[54rem] bg-[#a0684a] text-white flex flex-col justify-center">
          <h3 className="text-2xl pl-8 my-5 font-medium md:text-4xl md:my-10 lg:text-5xl lg:px-[18rem]">
            Property Description
          </h3>
          <h3
            className="text-xl text-justify px-8 md:text-2xl lg:text-3x lg:px-[18rem]"
            dangerouslySetInnerHTML={{ __html: details.description }}
          ></h3>
          <div className=" my-9 pl-8 flex lg:pl-[18rem] ">
            <div className="text-2xl font-semibold">
              <p>Reference Number -</p>
              <p>Rooms -</p>
              <p>Price -</p>
              <p>Contact -</p>
              <p>Address -</p>
            </div>
            <div className="text-2xl">
              <p>{details.referenceNumber}</p>
              <p>{details.rooms}</p>
              <p>{details.price} AED</p>
              <p>{details.phoneNumber.mobile}</p>
              <p>
                {details.location[1].name}, {details.location[2].name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Neighborhood />
      <Schedule />
      <Footer />
    </div>
  );
}

export default Information;
