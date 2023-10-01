import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* হেডারের লিংকের পাথ গুলো রাউটারে হোমের চিল্ড্রেনে লেখা হয়েছে। এত হোম সবার জন্য কমন*/}
      {/* <h2>This is a home components</h2> */}
      <div>{useNavigation.state === "loading" ? "Loading...." : ""}</div>
      {/* <div>{useNavigation.state === "loading" && "Loading...."}</div> */}
      <Outlet></Outlet>
      {/* Outlet যে কম্পোনেন্টে দেওয়া হয় router এর children -এ যে path গুলো দেওয়া হয় সেগুলো শো করে*/}
    </div>
  );
};

export default Home;
