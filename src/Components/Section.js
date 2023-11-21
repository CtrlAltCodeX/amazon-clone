import React from "react";
import ImageSlider from "./ImageSlider";

export default function Section() {
  const image = [
    {
      src: "/banner-imgs/1.jpg",
      alt: "banner",
    },
    {
      src: "/banner-imgs/2.jpg",
      alt: "banner",
    },
    {
      src: "/banner-imgs/3.jpg",
      alt: "banner",
    },
    {
      src: "/banner-imgs/4.jpg",
      alt: "banner",
    },
  ];

  const productsCards = [
    {
      mainName: "Deals inspired by your recent history",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
    {
      mainName: "4+ star deals for you",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
    {
      mainName: "Up to 75% off | Headphones",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
    {
      mainName: "Revamp your home in style",
      products: [
        {
          src: "/products-imgs/history.jpg",
        },
        {
          src: "/products-imgs/history2.jpg",
        },
        {
          src: "/products-imgs/history3.jpg",
        },
        {
          src: "/products-imgs/history4.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <ImageSlider images={image} noOfSlides={1} />

        <div className="grid grid-cols-4 p-5 relative bottom-[300px] gap-5">
          {productsCards.map((val) => {
            return (
              <div className="w-full bg-white p-5 grid gap-3">
                <p className="text-xl font-bold text-left mb-2">
                  {val.mainName}
                </p>

                <div className="grid grid-cols-2 gap-5">
                  {val.products.map((image) => {
                    return (
                      <div>
                        <img src={image.src} width="100px" className="m-auto" />
                      </div>
                    );
                  })}
                </div>

                <p className="text-sm text-left font-semibold mb-2 text-[#ccc]">
                  See all deals
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
