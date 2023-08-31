import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createNftAction } from "../redux/actions/nft";

const Modal = () => {
  const dispatch = useDispatch();

  const [nftData, setNftData] = useState({ name: "", desc: "", imgurl: "",price:"" });

  const onchangeImgFunc = async(e) => {
    const file = e.target.files[0];
    const base64=await convertToBase64(file);
      setNftData({ ...nftData, imgurl: base64 });
      };
  
  const onchangeFunc = (e) => {
    setNftData({ ...nftData, [e.target.name]: e.target.value });
  };
  
  const close=() => dispatch({ type: "MODAL", payload: false })
  const completed=()=>{
    alert("NFT Uploaded Successfully");
    close();
  }

  const nftCreate = () => {
    dispatch(createNftAction(nftData));
    dispatch({ type: "MODAL", payload: true })
     completed();
  };

  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white w-2/4 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-center text-2xl">NFT UPLOAD</h1>
          <AiOutlineClose
            onClick={close}
            size={25}
            className="flex items-baseline justify-between cursor-pointer"
          />
        </div>
        <div className="my-4 flex flex-col space-y-3">
          <input
            type="text"
            value={nftData.user}
            name="name"
            onChange={onchangeFunc}
            className="input-style input-text"
            placeholder="Name"
          />
          <input
            type="text"
            value={nftData.desc}
            name="desc"
            onChange={onchangeFunc}
            className="input-style input-text"
            placeholder="Description"
          />
          <div className="flex items-center justify-start">
          <input
            type="number"
            value={nftData.price}
            name="price"
            onChange={onchangeFunc}
            className="input-style input-text w-3/4"
            placeholder="Price"
          />
          <label className="">ETH</label>
          </div>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept=".jpg, .png, .jpeg"
            placeholder="add"
            onChange={onchangeImgFunc}
          />
          <label
            htmlFor="imageUpload"
            name="İmage"
            className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold space-y-3 px-2 p-2 rounded cursor-pointer"
          >
            Add İmage
          </label>
        </div>
       {nftData.imgurl==""||nftData.imgurl==null?"":<img src={nftData.imgurl} height={100} width={100}></img>}
        <div
          onClick={nftCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-900 "
        >
          Upload
        </div>
      </div>
    </div>
  );
};

export default Modal;


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });
}