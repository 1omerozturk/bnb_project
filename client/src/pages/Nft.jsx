import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getNftAction } from "../redux/actions/nft";
import Loader from "../components/Loader";

const Nft = () => {
  const dateD = (d) => {
    d = new Date(d);
    const yil = d.getFullYear();
    const ay = d.getMonth() + 1;
    const gun = d.getDate();
    const tarih = `${yil}-${ay.toString().padStart(2, "0")}-${gun
      .toString()
      .padStart(2, "0")}`;
    return tarih;
  };

  const dateO = (d) => {
    d = new Date(d);
    const saat = d.getHours();
    const dakika = d.getMinutes();
    const saniye = d.getSeconds();
    const oclock = `${saat.toString().padStart(2, "0")}:${dakika
      .toString()
      .padStart(2, "0")}:${saniye.toString().padStart(2, "0")}`;
    return oclock;
  };

  const dispatch = useDispatch();
  const nftData = useSelector((state) => state.nft);
  let nftId = localStorage.getItem("nftId");
  useEffect(() => {
    dispatch(getNftAction(nftId));
  }, [dispatch, nftId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 w-full">
      {nftData.nft != "" ? (
        <div className="w-3/4 bg-white justify-center items-center text-center rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center">
            {
              <img
                height={250}
                width={450}
                src={
                  nftData.nft.imgurl ? nftData.nft.imgurl : nftData.nft.imageUrl
                }
              ></img>
            }
          </div>
          <div className="text-center items-center justify-center text-xl font-bold text-teal-400">
            {String(nftData.nft.name).toUpperCase()}
          </div>
          <div className="text-center items-center justify-center text-red-400">
            {String(nftData.nft.desc).charAt(0).toUpperCase() +
              String(nftData.nft.desc).slice(1)}
          </div>
          <div className="mt-4">
            <h3 className="text-xl  font-bold text-gray-800"></h3>
            <div className="bg-slate-200">
              <p className="text-blue-600 font-bold">
                <span className="text-black bg-slate-300">Date:</span>{" "}
                {dateD(nftData.nft.date)}
              </p>
              <p className="text-blue-600 font-bold mr-5">
                <span className="text-black bg-slate-300">Time:</span>{" "}
                {dateO(nftData.nft.date)}
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className=" bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              BUY
            </button>
          </div>

          <div className="mt-4">
            <a
              href="https://www.nftmarketplace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              NFT Marketplace'ye Göz Atın
            </a>
          </div>
        </div>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};
export default Nft;
