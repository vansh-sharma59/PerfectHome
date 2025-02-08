import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Footer from "../components/Footer";
import Neighborhood from "../components/Neighborhood";
import millify from "millify";
import Loading from "../components/Loading";
import overlay from "../assets/home-1-background-patern-3.png";
import svg1 from "../assets/icon-img-1.png";
import svg2 from "../assets/icon-img-3.png";
import svg3 from "../assets/icon-img-4.png";
import arrow from "../assets/arrow.svg";
import Request from "../components/Request";

function Information() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef(null);

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
        <h1 className="text-3xl pl-8 font-medium md:text-5xl lg:text-7xl xl:text-8xl text-[#C88A61]">
          {details.title}
        </h1>
        <p className="text-2xl pl-8 md:text-3xl md:my-2 lg:text-4xl lg:my-4">
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
        <div className="swip relative">
          <div className="absolute w-[100%] h-[100%]">
            <img
              src={overlay}
              alt="overlay"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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

          <div className="z-30 absolute top-1/2 left-0 hidden lg:block ml-[5rem]">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img
                src={arrow}
                alt="arrow"
                className="w-20 md:w-32 mr-5 scale-x-[-1]"
              />
            </button>
          </div>

          <div className="z-30 absolute top-1/2 right-0 hidden lg:block mr-[5rem]">
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={arrow} alt="arrow" className="w-20 md:w-32 mr-5" />
            </button>
          </div>
        </div>
        <div className=" bg-[#150b0b] border-y-[2px] border-[#C88A61] py-7 text-white flex justify-around md:py-9 lg:py-20">
          <p className="flex flex-col md:flex:row items-center text-xl md:text-4xl text-[#C88A61] tracking-wider">
            {" "}
            <div className="md:border md:border-[#C88A61] w-[10rem] h-[10rem] md:rounded-full flex justify-center items-center">
              <img src={svg1} alt="building" className="w-32 md:w-40" />
            </div>
            &nbsp; {details.rooms} Bedroom
          </p>
          <p className="flex flex-col md:flex:row items-center text-xl md:text-4xl text-[#C88A61] tracking-wider">
            {" "}
            <div className="md:border md:border-[#C88A61] w-[10rem] h-[10rem] md:rounded-full flex justify-center items-center">
              <img src={svg3} alt="building" className="w-32 md:w-40" />
            </div>
            &nbsp; {details.baths} Bathroom
          </p>
          <p className="flex flex-col md:flex:row items-center text-xl md:text-4xl text-[#C88A61] tracking-wider">
            {" "}
            <div className="md:border md:border-[#C88A61] w-[10rem] h-[10rem] md:rounded-full flex justify-center items-center">
              <img src={svg2} alt="building" className="w-32 md:w-40" />
            </div>
            &nbsp; {millify(details.area)} sqft
          </p>
        </div>
        <div className="min-h-[54rem] bg-[#0B0606] text-white flex flex-col justify-center relative ">
          <div className="absolute w-[100%] h-[100%]">
            <img
              src={overlay}
              alt="overlay"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-3xl pl-8 my-7 font-medium md:text-4xl md:my-10 lg:text-6xl lg:px-[18rem] text-center">
            Property Description
          </h3>
          <h3
            className="text-2xl text-justify px-8 md:text-2xl lg:text-3xl lg:px-[18rem]"
            dangerouslySetInnerHTML={{ __html: details.description }}
          ></h3>
          <div className=" my-9 pl-8 flex lg:pl-[18rem] ">
            <div className="text-2xl lg:text-3xl font-semibold">
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
      <Request />
      <Footer />
    </div>
  );
}

export default Information;
