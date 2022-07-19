import React, { useEffect } from "react";
import Collections from "../../components/Collections";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Perks from "../../components/Perks";
import Testimonials from "../../components/Testimonials";
import NewProducts from "../../components/NewProducts";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetCartQuery } from "../../app/services/api";
import { add, set } from "../../features/cart/cartSlice";
import { IProduct } from "../../../types";
interface ICartItem {
  productId: string;
  image: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}

const Home = () => {
  const id = useAppSelector((state) => state?.auth?.user?._id);
  const data = useGetCartQuery(id as string);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      const d = data?.data?.data?.products as ICartItem[];

      localStorage.setItem(
        "cid",
        JSON.stringify(data?.data?.data?._id as string)
      );
      dispatch(set(d as ICartItem[]));
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-col   md:min-h-screen overflow-hidden">
        <Header />
        <Hero />
      </div>
      <main>
        <div className="">
          <Perks />
          <Collections />
          <NewProducts />
          <Testimonials />
        </div>
      </main>

      <Footer />
    </>
    // <div>Home</div>
  );
};

export default Home;
