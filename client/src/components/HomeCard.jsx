import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { getNftsAction } from "../redux/actions/nft";

const HomeCard = () => {
  const dispatch = useDispatch();
  const { nfts } = useSelector((state) => state.nfts);

  useEffect(() => {
    dispatch(getNftsAction());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-2">
      {nfts != "" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
          {nfts.map((nft) => (
            <div
              key={nft._id}
              onClick={() => {
                window.location = "/nft";
                {
                  localStorage.setItem("nftId", nft._id);
                }
              }}
              className="bg-white rounded-lg p-4 shadow hover:scale-x-125 hover:scale-y-105 cursor-pointer"
            >
              {nft.imageUrl ? (
                <img
                  src={nft?.imageUrl}
                  alt={nft?.name}
                  width={140}
                  height={140}
                  className="w-full h-48 object-cover mb-4"
                />
              ) : (
                <img
                  src={nft?.imgurl}
                  alt={nft?.name}
                  className="w-full h-48 object-cover mb-4"
                />
              )}
              <h3 className='"text-lg font-bold mb-2 border-2 border-indigo-700'>
                {nft?.name}
              </h3>
              <p className="text-sm text-gray-700 border-l-4 border-red-500">
                {nft?.desc}
              </p>
              <p className="text-lg font-bold mt-2 border-l-4 border-green-500">
                {nft?.price} ETH
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};

export default HomeCard;
