
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div>
       <p> <b className="flex justify-center bg-cyan-700 border-spacing-2 border-gray-300 rounded-lg p-4 shadow-md hover:bg-slate-600 text-white">NEW ARRIVAL</b></p>
      </div>

      <div className="flex flex-wrap justify-center space-x-6 p-4">
        {/* First Product */}
        <div className="size-28 border border-gray-300 rounded-lg p-4 shadow-md hover:border-red-500 overflow-hidden hover:scale-105 flex flex-col items-center">
          <Image
          src={require("https://aromaconcepts.pk/cdn/shop/products/WhatsAppImage2023-07-12at23.36.39.jpg?v=1724221913&width=360")}
          alt="perfume 1"
           // src="https://aromaconcepts.pk/cdn/shop/products/WhatsAppImage2023-07-12at23.36.39.jpg?v=1724221913&width=360"
            className="w-40 h-auto rounded-lg mb-4 border-separate transition-opacity hover:opacity-75 hover:rotate-1 hover:bg-blue-500 hover:shadow-lg hover:border-red-500"
          />
          <div className="text-gray-800 text-lg font-serif hover:text-red-400">nouf-pineaplle-punch</div>
          <p className="text-gray-700 text-base">price: 7,800</p>
        </div>

        {/* Second Product */}
        <div className="size-28 border border-gray-300 rounded-lg p-4 shadow-md hover:border-red-500 overflow-hidden hover:scale-105 flex flex-col items-center">
          <img
            src="https://aromaconcepts.pk/cdn/shop/products/Barackartextraitbottlefeed.jpg?v=1724221943&width=360"
            className="w-40 h-auto rounded-lg mb-4 border-separate transition-opacity hover:opacity-75 hover:rotate-1 hover:bg-blue-500 hover:shadow-lg hover:border-red-500"
          />
          <div className="text-gray-800 text-lg font-serif hover:text-red-400">barackart-extrait-red</div>
          <p className="text-gray-700 text-base">
            price: 7,800</p>
        </div>

        {/* Third Product */}
        <div className="size-28 border border-gray-300 rounded-lg p-4 shadow-md hover:border-red-500 overflow-hidden hover:scale-105 flex flex-col items-center">
          <img
            src="https://aromaconcepts.pk/cdn/shop/products/NorthStagExpressionsIUN1.jpg?v=1709133198&width=360"
            className="w-40 h-auto rounded-lg mb-4 border-separate transition-opacity hover:opacity-75 hover:rotate-1 hover:bg-blue-500 hover:shadow-lg hover:border-red-500"
          />
          <div className="text-gray-800 text-lg font-serif hover:text-red-400">nouf-pineaplle-punch</div>
          <p className="text-gray-700 text-base">price: 7,800</p>
        </div>

        {/* Fourth Product */}
        <div className="size-28 border border-gray-300 rounded-lg p-4 shadow-md hover:border-red-500 overflow-hidden hover:scale-105 flex flex-col items-center">
          <img
            src="https://aromaconcepts.pk/cdn/shop/files/9_a0c76db4-337f-4f23-8524-15f71f4f7274.png?v=1727254354&width=360"
            className="w-40 h-auto rounded-lg mb-4 border-separate transition-opacity hover:opacity-75 hover:rotate-1 hover:bg-blue-500 hover:shadow-lg hover:border-red-500"
          />
          <div className="text-gray-800 text-lg font-serif hover:text-red-400">KILLER OUD AND JUBILANT KILLER OUD</div>
          <p className="text-gray-700 text-base">price: 7,800</p>
        </div>

        {/* Fifth Product */}
        <div className="size-28 border border-gray-300 rounded-lg p-4 shadow-md hover:border-red-500 overflow-hidden hover:scale-105 flex flex-col items-center mb-4 ml-[30px] ">
          <img
            src="https://aromaconcepts.pk/cdn/shop/collections/North-stag.jpg?v=1632866149&width=535"
            className="w-40 h-auto rounded-lg mb-4 border-separate transition-opacity hover:opacity-75 hover:rotate-1 hover:bg-blue-500 hover:shadow-lg hover:border-red-500"
          />
          <div className="text-gray-800 text-lg font-serif hover:text-red-400">North Stag</div>
          <p className="text-gray-700 text-base">price: 7,800</p>
        </div>
      </div>

      <p className="text-purple-100 text-lg font-serif bg-slate-800 rounded-xl text-center shadow-2xl hover:text-red-900 hover:bg-slate-300">
        Buy Now
      </p>
    </main>
  );
}