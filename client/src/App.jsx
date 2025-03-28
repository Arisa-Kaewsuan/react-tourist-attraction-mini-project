import "./App.css";
import { FaLink } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { DebounceInput } from "react-debounce-input";

function App() {
  const [inputData, setInpuData] = useState("");
  const [apiData, setAPIData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null); // เก็บ state ของลิงก์ที่ถูกคัดลอก

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${inputData}`
      );
      // console.log(response.data.data);
      setAPIData(response.data.data);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (inputData.trim() !== "") {
      getData();
    } else {
      getData();
    }
  }, [inputData]);

  const handleTagClick = (tag) => {
    setInpuData((prev) => {
      const tags = prev.split(" ").filter(Boolean);
      return tags.includes(tag) ? prev : `${prev} ${tag}`.trim();
    });
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url); // บันทึก URL ที่ถูกคัดลอกล่าสุด
      setTimeout(() => setCopiedUrl(null), 2000); // ซ่อนข้อความหลังจาก 2 วินาที
    });
  };

  return (
    <div className="App p-8">
      {/* Start coding here */}
      <h1 className="title text-blue text-3xl text-center p-5">เที่ยวไหนดี</h1>

      <form className="w-full border-b border-gray-400 font-normal h-12 flex md:mx-10">
        <label className="self-center whitespace-nowrap pr-2">
          ค้นหาที่เที่ยว
        </label>
        <DebounceInput
          type="text"
          className="w-full self-end pl-10 md:pl-20 focus:outline-none"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={inputData}
          onChange={(e) => setInpuData(e.target.value)}
          debounceTimeout={1500}
        />
      </form>

      {apiData.map((data) => {
        return (
          <div
            className="mt-5 flex flex-col md:flex-row h-auto space-y-4 md:space-y-0"
            key={data.eid}
          >
            <div className="w-full md:w-1/2 flex">
              <img
                src={data.photos[0]}
                alt={data.title}
                className="rounded-2xl w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </div>
            <div className="w-full h-auto md:w-1/2 md:ml-5">
              <a
                href={data.url}
                className="w-full text-lg md:text-xl font-semibold"
              >
                {data.title}
              </a>
              <p className="text-gray-400 mt-2 text-sm line-clamp-1">
                {data.description}
              </p>
              <a
                href={data.url}
                className="text-blue underline mt-2 text-sm inline-block cursor-pointer"
              >
                อ่านต่อ
              </a>
              <div className="flex flex-wrap gap-2 text-gray-400 mt-2 items-center">
                <p className="text-sm">หมวด</p>
                {data.tags.slice(0, -1).map((tag, index) => (
                  <a
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className="cursor-pointer underline text-sm"
                  >
                    {tag}
                  </a>
                ))}
                <p className="text-sm">และ</p>
                <a
                  onClick={() =>
                    handleTagClick(data.tags[data.tags.length - 1])
                  }
                  className="cursor-pointer underline text-sm"
                >
                  {data.tags[data.tags.length - 1]}
                </a>
              </div>
              <div className="flex py-4 items-end justify-between">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {data.photos.slice(1).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 object-cover rounded-2xl"
                    />
                  ))}
                </div>
                <div className="border border-blue p-2 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <a
                    onClick={() => handleCopyLink(data.url)}
                    className="text-blue cursor-pointer"
                  >
                    <FaLink />
                  </a>
                </div>

                {/* แสดงข้อความเมื่อคัดลอกลิงก์แล้ว */}
                {copiedUrl === data.url && (
                  <p className="text-green-500 text-sm mt-2">
                    คัดลอกลิงก์แล้ว!
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
