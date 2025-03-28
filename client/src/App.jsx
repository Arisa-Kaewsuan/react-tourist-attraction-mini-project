import "./App.css";
import { FaLink } from "react-icons/fa";

function App() {
  return (
    <div className="App p-8">
      {/* Start coding here */}

      <h1 className="title text-blue text-3xl text-center p-5">เที่ยวไหนดี</h1>

      <form className="border-b border-gray-400 font-normal h-12 flex md:mx-10">
        <label htmlFor="">ค้นหาที่เที่ยว</label>
        <input
          type="text"
          className="self-end pl-10 md:pl-20 focus:outline-none"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
        />
      </form>

      {/* Card 1 */}
      <div className="mt-5 flex">
        <div className="bg-amber-800 w-1/2 md:w-1/2 h-auto md:h-auto rounded-2xl">
          <img src="" alt="" />
        </div>

        <div className="ml-5 w-full">
          <h2 className="w-full text-xl">
            คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
          </h2>
          <p className="text-gray-400">
            วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่างๆ เช่น เที่ยวน้ำตก
            ล่องเรือชมป่าชายเลน ขี่ช้างท่องป ...
          </p>
          <a href="#" className="text-blue underline">
            อ่านต่อ
          </a>

          <div className="flex gap-4 text-gray-400">
            <p>หมวด</p>
            <a href="#" className="underline">
              เกาะ
            </a>
            <a href="#" className="underline">
              ทะเล
            </a>
            <a href="#" className="underline">
              จุดชมวิว
            </a>
            <a href="#" className="underline">
              ธรรมชาติ
            </a>
            <p>และ</p>
            <a href="#" className="underline">
              ตราด
            </a>
          </div>

          <div className="flex py-5 items-end justify-between">
            <div className="flex gap-4">
              <img src="" alt="" className="w-24 h-24 rounded-2xl" />
              <img src="" alt="" className="w-24 h-24 rounded-2xl" />
              <img src="" alt="" className="w-24 h-24 rounded-2xl" />
            </div>

            <div className="border border-blue p-2 h-12 w-12  rounded-full flex items-center justify-center">
              <a href="#" className="text-blue">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="mt-5 flex">
        <div className="bg-amber-800 w-1/2 md:w-1/2 h-auto md:h-auto rounded-2xl">
          <img src="" alt="" />
        </div>

        <div className="ml-5 w-full">
          <h2 className="w-full text-xl">
            คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
          </h2>
          <p className="text-gray-400">
            วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่างๆ เช่น เที่ยวน้ำตก
            ล่องเรือชมป่าชายเลน ขี่ช้างท่องป ...
          </p>
          <a href="#" className="text-blue underline">
            อ่านต่อ
          </a>

          <div className="flex gap-4 text-gray-400">
            <p>หมวด</p>
            <a href="#" className="underline">
              เกาะ
            </a>
            <a href="#" className="underline">
              ทะเล
            </a>
            <a href="#" className="underline">
              จุดชมวิว
            </a>
            <a href="#" className="underline">
              ธรรมชาติ
            </a>
            <p>และ</p>
            <a href="#" className="underline">
              ตราด
            </a>
          </div>

          <div className="flex py-5 items-end justify-between">
            <div className="flex gap-4">
              <img src="" alt="" className="w-24 h-24 rounded-2xl" />
              <img src="" alt="" className="w-24 h-24 rounded-2xl" />
              <img src="" alt="" className="w-24 h-24 rounded-2xl" />
            </div>

            <div className="border border-blue p-2 h-12 w-12  rounded-full flex items-center justify-center">
              <a href="#" className="text-blue">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mt-5 flex">
      <div className="bg-amber-800 w-1/2 md:w-1/2 h-auto md:h-auto rounded-2xl">
        <img src="" alt="" />
      </div>

      <div className="ml-5 w-full">
        <h2 className="w-full text-xl">คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!</h2>
        <p className="text-gray-400">วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่างๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป ...</p>
        <a href="#" className="text-blue underline">อ่านต่อ</a>

        <div className="flex gap-4 text-gray-400">
          <p>หมวด</p>
          <a href="#" className="underline">เกาะ</a>
          <a href="#" className="underline">ทะเล</a>
          <a href="#" className="underline">จุดชมวิว</a>
          <a href="#" className="underline">ธรรมชาติ</a>
          <p>และ</p>
          <a href="#" className="underline">ตราด</a>
        </div>

        <div className="flex py-5 items-end justify-between">
          <div className="flex gap-4">
            <img src="" alt="" className="w-24 h-24 rounded-2xl"/>
            <img src="" alt="" className="w-24 h-24 rounded-2xl"/>
            <img src="" alt="" className="w-24 h-24 rounded-2xl"/>
          </div>

          <div className="border border-blue p-2 h-12 w-12  rounded-full flex items-center justify-center">
            <a href="#" className="text-blue"><FaLink /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
