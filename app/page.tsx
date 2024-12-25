"use client"
// import { useState } from "react";
import SearchBar from './../components/SearchBar'
import Footer from './../components/Footer'

export default function Home() {
  // const [query, setQuery] = useState('');

  // const handleSearch = () => {
  //   if (query) {
  //     window.location.href = `https://www.google.com/search?q=${query}`;
  //   }
  // };
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Google</h1>
      </header>
      <main className="main">
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}
