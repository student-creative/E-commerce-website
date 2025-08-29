// // models/productData.js
// export const products = [
//   {
//     id: 1,
//     title: "Smartphone XYZ",
//     description: "Smartphone XYZ features a stunning 6.5-inch OLED display, 128GB storage, 8GB RAM, dual camera setup, and 4500mAh battery for all-day usage.",
//     image: "http://localhost:5000/img/iphone.jpg",
//     price: 29999,
   
//   },
//   {
//     id: 2,
//     title: "Laptop ABC",
//     description: "Laptop ABC comes with Intel i7 processor, 16GB RAM, 512GB SSD, dedicated NVIDIA graphics, and a 15.6-inch Full HD display, perfect for work and gaming.",
//     image: "http://localhost:5000/img/dell.jpg",
//     price: 75000,
   
//   },
//   {
//     id: 3,
//     title: "Wireless Earbuds",
//     description: "Noise-cancelling wireless earbuds with up to 8 hours playback, touch controls, water-resistant design, and superior sound quality for music and calls.",
//     image: "http://localhost:5000/img/earbud.jpg",
//     price: 4999,
   
//   },
//   {
//     id: 4,
//     title: "Smartwatch 123",
//     description: "Fitness tracking smartwatch with heart-rate monitor, sleep tracking, step counter, notification alerts, customizable watch faces, and up to 7 days battery life.",
//     image: "http://localhost:5000/img/smartwatch.jpg",
//     price: 8999,
   
//   },
//   {
//     id: 5,
//     title: "Gaming Mouse",
//     description: "RGB gaming mouse with high-precision 16000 DPI sensor, 8 programmable buttons, ergonomic design, and customizable RGB lighting for immersive gaming.",
//     image: "http://localhost:5000/img/mouse.jpg",
//     price: 1999,
   
//   },
//   {
//     id: 6,
//     title: "Mechanical Keyboard",
//     description: "Durable mechanical keyboard with tactile switches, full-size layout, anti-ghosting, RGB backlighting, and customizable macros for gaming and productivity.",
//     image: "http://localhost:5000/img/keyboard.jpg",
//     price: 3499,
   
//   },
//   {
//     id: 7,
//     title: "Bluetooth Speaker",
//     description: "Portable Bluetooth speaker with deep bass, 10 hours playtime, waterproof design, built-in mic for calls, and compatibility with all Bluetooth devices.",
//     image: "http://localhost:5000/img/speaker.jpg",
//     price: 2999,
   
//   },
//   {
//     id: 8,
//     title: "DSLR Camera",
//     description: "High-resolution DSLR camera with 24MP sensor, 4K video recording, interchangeable lenses, advanced autofocus, and Wi-Fi connectivity for photographers.",
//     image: "http://localhost:5000/img/camara.jpg",
//     price: 45000,
   
//   },
//   {
//     id: 9,
//     title: "LED Monitor",
//     description: "24-inch Full HD LED monitor with ultra-thin bezels, 75Hz refresh rate, 5ms response time, and HDMI/VGA connectivity for work and gaming.",
//     image: "http://localhost:5000/img/moniter.jpg",
//     price: 10999,
   
//   },
//   {
//     id: 10,
//     title: "External Hard Drive",
//     description: "1TB portable external hard drive with USB 3.0 connectivity, shock-resistant design, password protection, and high-speed data transfer for backups.",
//     image: "http://localhost:5000/img/harddrive.jpg",
//     price: 3999,
   
//   },
//   {
//     id: 11,
//     title: "Fitness Band",
//     description: "Track your daily activity with this lightweight fitness band offering step counting, calorie tracking, heart rate monitoring, and water resistance.",
//     image: "http://localhost:5000/img/fitnessband.jpg",
//     price: 1999,
   
//   },
//   {
//     id: 12,
//     title: "Laptop Stand",
//     description: "Adjustable ergonomic laptop stand for better posture, heat dissipation, and improved typing angle, compatible with laptops up to 17 inches.",
//     image: "http://localhost:5000/img/stand.jpg",
//     price: 1499,
   
//   },
//   {
//     id: 13,
//     title: "Smartphone Cover",
//     description: "Shockproof smartphone cover made of durable materials, with precise cutouts, textured grip, and stylish design to protect your phone from drops and scratches.",
//     image: "http://localhost:5000/img/cover.jpg",
//     price: 499,
   
//   },
//   {
//     id: 14,
//     title: "HDMI Cable",
//     description: "High-speed HDMI cable supporting 4K video, 60Hz refresh rate, gold-plated connectors, and braided design for long-lasting durability and stable connection.",
//     image: "http://localhost:5000/img/hdmi.jpg",
//     price: 299,
   
//   },
//   {
//     id: 15,
//     title: "Tablet XYZ",
//     description: "10-inch Android tablet with 4GB RAM, 64GB storage, multi-touch screen, stereo speakers, long battery life, and perfect for entertainment and productivity.",
//     image: "http://localhost:5000/img/tablet.jpg",
//     price: 14999,
   
//   },
//   {
//     id: 16,
//     title: "Portable Charger",
//     description: "10000mAh power bank with dual USB output, fast charging, LED battery indicator, compact design, and compatible with all smartphones and tablets.",
//     image: "http://localhost:5000/img/charger.jpg",
//     price: 999,
   
//   },
//   {
//     id: 17,
//     title: "Webcam HD",
//     description: "1080p HD webcam with built-in microphone, auto focus, plug-and-play USB connection, perfect for video conferencing and streaming.",
//     image: "http://localhost:5000/img/webcam.jpg",
//     price: 2499,
   
//   },
//   {
//     id: 18,
//     title: "Noise Cancelling Headphones",
//     description: "Over-ear headphones with active noise cancelling, wireless connectivity, 20 hours battery life, comfortable ear cushions, and immersive sound quality.",
//     image: "http://localhost:5000/img/noise.jpg",
//     price: 6999,
   
//   },
//   {
//     id: 19,
//     title: "Smart Home Bulb",
//     description: "WiFi controllable smart bulb with adjustable brightness, multiple colors, energy-saving, compatible with Alexa and Google Assistant.",
//     image: "http://localhost:5000/img/bulb.jpg",
//     price: 799,
   
//   },
//   {
//     id: 20,
//     title: "Gaming Chair",
//     description: "Comfortable ergonomic gaming chair with adjustable height, reclining backrest, lumbar support, and durable materials for long gaming sessions.",
//     image: "http://localhost:5000/img/chair.jpg",
//     price: 11999,
   
//   },
//   {
//     id: 21,
//     title: "Laptop Backpack",
//     description: "Waterproof laptop backpack with multiple compartments, padded laptop sleeve, USB charging port, and comfortable shoulder straps for daily use.",
//     image: "http://localhost:5000/img/bag.jpg",
//     price: 2499,
   
//   },
//   {
//     id: 22,
//     title: "Action Camera",
//     description: "4K waterproof action camera with wide-angle lens, image sthttp://localhost:5000/img/earbud.jpgodes, and Wi-Fi connectivity for adventure enthusiasts.",
//     image: "http://localhost:5000/img/actioncamera.jpg",
//     price: 8999,
   
//   },
//   {
//     id: 23,
//     title: "Wireless Charger",
//     description: "Fast wireless charging pad compatible with Qi-enabled devices, slim design, LED indicator, and overcharge protection for safe charging.",
//     image: "http://localhost:5000/img/earbud.jpg",
//     price: 1299,
   
//   },
//   {
//     id: 24,
//     title: "Smart Thermostat",
//     description: "WiFi enabled smart thermostat with programmable schedules, energy-saving features, mobile app control, and easy installation.",
//     image: "http://localhost:5000/img/wireless.jpg",
//     price: 4999,
   
//   },
//   {
//     id: 25,
//     title: "Electric Kettle",
//     description: "1.7L stainless steel electric kettle with automatic shut-off, boil-dry protection, fast heating, and sleek modern design for daily use.",
//     image: "http://localhost:5000/img/electric.jpg",
//     price: 1999,
   
//   }
// ];
