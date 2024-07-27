import React from "react";
import SectionLayout from "../SectionLayout";
import Input from "../Input";
import Button from "../Button";
import FooterSignUp from "./FooterSignUp";
import Accordion from "./Accordion";
import FooterLink from "./FooterLink";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname != "/checkout" && (
        <footer>
          <SectionLayout className="bg-secondary-100 flex-row-reverse space-y-7 lg:space-y-0  text-primary-800 md:flex justify-start gap-20 items-start">
            <div className="max-w-[400px] mx-auto">
              <FooterSignUp />
            </div>
            <div className="py-3 md:pt-0 flex space-y-1 md:space-y-0 flex-col justify-start md:flex-row  md:divide-y-0  flex-grow md:gap-10 max-w-[400px] md:max-w-none mx-auto">
              {/* <div></div> */}
              <Accordion title="Connect">
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">LinkedIn</FooterLink>
              </Accordion>
              {/* <Accordion title="Connect"/> */}
              <Accordion title="Get Help">
                <FooterLink to="/">Help Center</FooterLink>
                <FooterLink to="/">Return Policy</FooterLink>
                <FooterLink to="/">Shipping Info</FooterLink>
                <FooterLink to="/">Bulk Order</FooterLink>
              </Accordion>
              <Accordion title="Collections">
                <FooterLink to="/collections/men">Men</FooterLink>
                <FooterLink to="/collections/women">Women</FooterLink>
                <FooterLink to="/collections/unisex">Unisex</FooterLink>
              </Accordion>
            </div>
            {/* <code className='text-center absolute left-0 bottom-0 w-full text-xs'>Designed and Developed by <a className='underline text-secondary-600' href="https://github.com/HayBeeCoder">HayBeeCoder</a> </code> */}
          </SectionLayout>
        </footer>
      )}
    </>
  );
};

export default Footer;
