import React, { useState, useEffect } from "react";
import "./About.css";

const Giphy = ({ active }) => {
  const designerUrl = [
    "https://media4.giphy.com/media/EZnlMRCw7jkyqt4vLk/giphy.gif?cid=d944c98c17b005d8a4c904c0b2fba503cb525966da5f89e3&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/kbu8xsXRJZVtNqveKw/giphy.gif?cid=d944c98c477d2152590d2214396e912f88820cfcaac92551&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/wlwEQQGU5GJMCHPFVn/giphy.gif?cid=d944c98cb3104c7dad8a007a5c5895dac22ab7149bf993cd&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/2ikwIgNrmPZICNmRyX/giphy.gif?cid=d944c98cf02ad58ad57f25b18777b510c7b6f30284d33297&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif?cid=d944c98c8cd881888b38ed0e7e4931c4ef75155925f957ba&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/8zOTL12VurBikJvosb/giphy.gif?cid=d944c98c5dce1190c7a8d14ff846969828be6df73cee4074&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/1k889fiqiZV19HO2sx/giphy.gif?cid=d944c98c880fe523e638c4534dff182bea11479fdf5e9f7a&rid=giphy.gif&ct=g",
  ];
  const developerUrl = [
    "https://media4.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif?cid=d944c98c0540f2a1ccc374a304daeae40af1cef9abd68608&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/TFPdmm3rdzeZ0kP3zG/giphy-downsized-medium.gif?cid=d944c98cc2356dcd28051c407593448e0cf3defc19a6050e&rid=giphy-downsized-medium.gif&ct=g",
    "https://media2.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif?cid=d944c98c3f2da1ed8573721094cad47b34ae7d6ca2945f9c&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif?cid=d944c98c34b812ddf93784ed0a8aa9f255dc7008b9aa0758&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=d944c98c67fa0ed63e976ee8f783e78b45d6173c1dc8a722&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/4rZA5D22301iMgrUNd/giphy.gif?cid=d944c98cefbd5c84634ca8d6a2c5d2a0bde9db3f6a1a273f&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/g06HKnMmtK1aXurndU/giphy.gif?cid=d944c98c75cfe9b7d0a58d53f0792f58dde3b18eed02537b&rid=giphy.gif&ct=g",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === designerUrl.length - 1 ? 0 : currentIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="gif_cont">
      {active === "design" && <img src={designerUrl[currentIndex]} alt="GIF" />}
      {active === "develop" && (
        <img src={developerUrl[currentIndex]} alt="GIF" />
      )}
    </div>
  );
};

export default Giphy;
