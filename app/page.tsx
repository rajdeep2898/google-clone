"use client"
// import { useState } from "react";
import SearchBar from './../components/SearchBar'
import Footer from './../components/Footer'
import HomeHeader from './../components/HomeHeader'


export default function Home() {
  // const [query, setQuery] = useState('');

  // const handleSearch = () => {
  //   if (query) {
  //     window.location.href = `https://www.google.com/search?q=${query}`;
  //   }
  // };
  return (
    <div className="app">
      <HomeHeader />
      <header className="header">
      <img
            src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Profile"
            className="logo"
          />
      
      </header>
      <main className="main">
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}
