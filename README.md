
# Skill Check Point 3 : Front-End
ทำเว็บไซต์ที่เอาไว้ค้นหาสถานที่ท่องเที่ยวตาม Requirement ที่กำหนดให้ 

Tech Stack : React.js / TailwindCSS
<br/><br/><br/>

## Setting Up Environment
✅ Folk Project 

✅ Clone Project 

✅ cd server >> npm install >> npm start

✅ cd client >> npm install >> npm run dev

✅ [Set up tailwind](https://tailwindcss.com/docs/installation/using-vite)  

✅ [Set up google font](https://fonts.google.com/)

✅ [Set up react icons](https://react-icons.github.io/react-icons/) 
<br/><br/><br/>

## Requirement Checklists
✅ feat/CreateUI : สร้าง UI ตามรูป 
    ![Screenshot 2025-03-28 132313](https://github.com/user-attachments/assets/440be127-6e03-4bbc-a241-73b5cdf067b6)

✅ feat/DataFetching : เอาข้อมูลจาก Server ทั้งหมดมาแสดง โดยที่
    
-  Description จะต้องแสดงไม่เกิน 100 ตัวอักษร : ใช้ line-clamp-1

-  UI สามารถแสดงแค่ Title, Description และรูปภาพใหญ่ 1 รูป (โดยที่รูปภาพใหญ่เอามาจาก Value ที่อยู่ใน Array อันแรกของ Key photos ที่อยู่ใน Response จาก Server

-  สถานที่ท่องเที่ยวแต่ละรายการจะต้องแสดงหมวดหมู่  ซึ่งข้อมูลหมวดหมู่เอามาจากข้อมูลที่ Server ส่งกลับมาให้ใน Object จาก Response ที่มี Property ชื่อว่า `tags`


✅ feat/Searching : ผู้ใช้งานสามารถพิมพ์คำค้นหาลงในช่อง Input เพื่อค้นหาสถานที่ท่องเที่ยวได้

✅ feat/ReadMore : เมื่อ User คลิกปุ่ม “อ่านต่อ” จะต้องเปิดลิ้งค์ขึ้นมาใน Tab ใหม่ของ Web Browser ลิ้งค์จะเอามาจาก Property url

-  ชื่อของสถานที่ท่องเที่ยวแต่ละรายการจะต้องเป็นลิ้งค์ที่สามารถกดเข้าไปดูรายละเอียดเพิ่มเติมได้ ซึ่งลิ้งค์นี้จะเปิดหน้าเว็บไซต์ใหม่ขึ้นมา โดย ลิ้งค์ของสถานที่ท่องเที่ยวนั้นๆ เอามาจากข้อมูลที่ Server ส่งกลับมาให้ใน Object จาก Response ที่มี Property ชื่อว่า url

✅  feat/InputCategory : เมื่อ User คลิกที่หมวดหมู่จะต้องเอาข้อความที่คลิกไปใส่ลงในช่อง Input เพื่อทำการค้นหา เมื่อคลิกหมวดหมู่อีกครั้ง ก็จะเอาคำไปต่อจากคำเดิมในช่อง Input เช่น ถ้าคลิก หมวดหมู่ เกาะ และคาเฟ่ ข้อความที่อยู่ในช่อง Input จะเป็นแบบนี้ “เกาะ คาเฟ่”

-  ในแต่ละรายการสถานที่ท่องเที่ยวจะมี ปุ่มลิ้งค์สีฟ้าๆ ที่สามารถกดแล้วจะ Copy ลิ้งค์ที่สามารถกดเข้าไปดูรายละเอียดเพิ่มเติมได้ลงใน Clipboard
