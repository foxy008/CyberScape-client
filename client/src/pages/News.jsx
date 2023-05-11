import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getNews } from "../actions/news";
import GalaxyBackground from "../components/GalaxyBackground";

export default function News() {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  async function catchNews() {
    dispatch(getNews());
  }

  useEffect(() => {
    catchNews();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const pageCount = Math.ceil(news.totalResults / pageSize);

  if (!news.articles) return null;
  const highlight = news.articles[0];
  const news_nft = news.articles.filter((el, i) => i !== 0);

  const dateStr = highlight.publishedAt
  const date = new Date(dateStr)
  const option = { year: "numeric", month: "2-digit", day: "2-digit" }
  const formattedDate = date.toLocaleString(undefined, option).replace(/\//g, "-")

  function handlePageClick(data) {
    setCurrentPage(data.selected + 1);
  }

  return (
    <>
      <GalaxyBackground>
        <section>
          <p className="text-4xl tracking-wider font-semibold text-indigo-700 ml-20 mt-20" style={{ fontFamily: "Orbitron"}}>
            NFT News
          </p>
          <div className="flex justify-between ml-20 mr-20 mt-10">
            <img
              className="flex h-[400px] w-2/3 mx-auto shadow-2xl rounded-l-xl"
              style={{
                backgroundSize: "100%",
                justifyItems: "center",
              }}
              src={highlight.urlToImage}
              alt={highlight.title}
            />
            <div className="flex-col h-[400px] overflow-y-scroll overflow-x-hidden w-1/3 p-6 text-indigo-600 bg-gray-900 rounded-r-xl">
              <p className="text-2xl text-justify font-semibold" style={{ fontFamily: "Orbitron"}}>
                {highlight.title}
              </p>
              <p className="text-justify text-sm text-purple-300 w-[320px] mt-4" style={{ fontFamily: "Orbitron"}}>
                {highlight.description}
              </p>
              <div className="flex justify-between mt-12" style={{ fontFamily: "Orbitron"}}>
                <div className="flex flex-col">
                  <p className="!mb-1 self-start text-sm font-semibold text-purple-300 line-clamp-1">
                    Author:
                    <span className="ml-2">
                      {highlight.author ? highlight.author : `-`}
                    </span>
                  </p>
                  <p className="text-indigo-400 font-semibold tracking-wide text-xs">Published At: { formattedDate }</p>
                </div>
                <button
                  onClick={() => window.open(article.url, "_blank")}
                  className="linear rounded-[10px] h-[35px] w-[120px] bg-purple-950 self-end text-base font-medium text-purple-300 transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                  target="_blank"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between ml-20 mr-[55px]">
            <div className="flex flex-col mt-10">
              <div
                className="w-[320px] h-[420px] rounded-xl"
                style={{
                  backgroundImage:
                    "url('https://skybee.io/wp-content/uploads/2022/03/nftwall-ads.jpg')",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[320px] h-[420px] mt-10 rounded-xl"
                style={{
                  backgroundImage:
                    "url('https://tse1.mm.bing.net/th?id=OIP.MujcXp3x4ITzkam9QfV84AHaKY&pid=Api&P=0')",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 self-start gap-6 mt-10 mr-[25px]">
              {news_nft
                ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .map((article, index) => (
                  <div className="flex">
                    <div
                      key={index}
                      className="!z-5 relative flex flex-col w-[250px] bg-gray-900 shadow-2xl rounded-xl"
                    >
                      <div className="h-full w-full">
                        <div className="relative w-full">
                          <img
                            src={article.urlToImage}
                            className="h-[180px] w-[250px] rounded-t-xl"
                            alt=""
                          />
                        </div>
                        <div className="!p-2.5" style={{ fontFamily: "Orbitron"}}>
                          <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                            <div className="relative mb-2 h-[130px]">
                              <p className="text-base font-semibold text-indigo-600 line-clamp-2">
                                {article.title}
                              </p>
                              <p className="w-[220px] text-xs font-medium text-justify text-purple-400 md:mt-2 line-clamp-5 text-ellipsis">
                                {article.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex">
                              <p className="!mb-1 self-start text-xs font-semibold text-purple-300 line-clamp-1">
                                Author:
                                <span className="ml-2">
                                  {article.author ? article.author : `-`}
                                </span>
                              </p>
                            </div>
                            <button
                              onClick={() => window.open(article.url, "_blank")}
                              className="linear rounded-[10px] w-[120px] mx-auto bg-purple-950 px-3 py-1 text-base font-medium text-purple-300 transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                              target="_blank"
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-end mr-20">
            <ReactPaginate
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="pagination flex bg-gray-900 text-2xl justify-center tracking-widest gap-5 text-purple-300 w-[800px] rounded-2xl"
              activeClassName="active"
              previousLabel="<"
              nextLabel=">"
              style={paginationStyles}
            />
          </div>
        </section>
      </GalaxyBackground>
    </>
  );
}

const paginationStyles = {
    fontFamily: "Orbitron",
    display: "flex",
    backgroundColor: "gray",
    color: "purple",
    justifyContent: "center",
    fontSize: "2rem",
    gap: "5px",
    width: "800px",
    borderRadius: "2rem",
  };
