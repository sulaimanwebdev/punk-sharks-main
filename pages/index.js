import Head from 'next/head'
import Link from 'next/link'
import {useEffect, useState} from "react";
import Header from '../components/Header'
import FAQ from '../components/FAQ';
import FAQTutorial from '../components/FAQTutorial';
import LargestSales from '../components/LargestSales';
import Categories from '../components/Categories';
export default function Home() {
 

  // const [getdata, setgetdata] = useState([]);



  // const fetchData = async () => {
  //          const response = await fetch("/api/categories");
  //          setgetdata(await response.json());

  // }


  //         useEffect(() => {
  //           fetchData();

  //           }, []);



  

  return (
   <>
     <Head>
       <title>PunkSharks</title>
       <link rel="shortcut icon" href="/images/small-shark2.png" />
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css"/>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
     </Head>

   
<Header/>
<div className="relative homeParent pb-24 mb-20 pt-20">

<div id="home" className="widthMax scroll-mt-30	 topSection mx-auto px-7 w-full ">

<div className="font-extrabold text-5xl mb-7 mainTitle">The PunkSharks</div>
<p className="opacity-90 aboutText mb-4 mainParagraph">
Punsharks is a collection of 10,000 NFTs - unique and randomly generated digital collectibles with proof of ownership on the Polygon blockchain. All PunkSharks are cool and contains a different combination of traits but some are rarer than others.
<span className="mt-3 block">Own a PunkShark and be a part of the evolution of the internet!</span>
</p>


<div className="flex items-center gap-3 mb-5">
<a href="https://discord.com/invite/EjDAXagrCQ" title='Discord' target="_blank" className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition transform hover:-translate-y-1'><img src="/images/discord.svg" className='w-7 opacity-80' alt="Discord Icon" /></a>
<a href="https://twitter.com/PunkSharks"  title='Twitter' target="_blank" className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition transform hover:-translate-y-1'><i class="fab fa-twitter text-2xl opacity-80"></i></a>
<a href="https://www.instagram.com/the_punksharks/"  title='Instagram' target="_blank" className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition transform hover:-translate-y-1'><i class="fab fa-instagram text-2xl opacity-70"></i></a>
<a href="https://oncyber.io/punksharks"  title='3D Gallery' target="_blank" className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition transform hover:-translate-y-1'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-3d-cube-sphere" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M6 17.6l-2-1.1V14M4 10V7.5l2-1.1M10 4.1L12 3l2 1.1M18 6.4l2 1.1V10M20 14v2.5l-2 1.12M14 19.9L12 21l-2-1.1M12 12l2-1.1M18 8.6l2-1.1M12 12v2.5M12 18.5V21M12 12l-2-1.12M6 8.6L4 7.5"/></svg></a>




</div>
<a href="https://opensea.io/collection/the-punksharks" target="_blank" className="px-5 flex items-center gap-2 w-fit  py-4 bg-blue-500 transition hover:bg-blue-600 text-white font-extrabold rounded-lg">
<svg width="40" className="openseaLogo" height="40" viewBox="0 0 90 90" fill="green" xmlns="http://www.w3.org/2000/svg">
<path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="white"/>
<path d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z" fill="#3b82f6"/>
<path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="#3b82f6"/>
</svg>
 View On Opensea</a>
</div>

<div className="asd absolute left 0 bottom-0"></div>


</div>




<div className="">


   
<div className="cover banner w-full">
     <img src="/images/Banner9.png" alt="Cover Image" className="w-full select-none h-full object-cover object-center" />
   </div>
    <p className="text-center specs mx-auto opacity-80 mt-10">The PunkSharks are 32 bit pixel art NFT images and generated algorithmically. These are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS. <span className="underline text-blue-500 hover:text-yellow-500"><Link href="/provenance" target="_blank">Check Provenence Record</Link></span></p>




<div id="categories" className="categories scroll-mt-32 widthMax w-full mx-auto mt-40 mb-32 px-7">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Categories</div>


<Categories/>


</div>



















<div id="stats" className="secondMaxWidth mx-auto px-7 w-full mt-32 scroll-mt-32">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Overall Stats</div>


<div className="grid grid-cols-3 gap-5 gap-y-10 mt-20 w-full statsGrid">
 <div>
   <div className="opacity-80 mb-1">Current lowest price Shark available</div>
   <div className="font-bold opacity-80">0.0007 ETH ($2.35 USD)</div>
 </div>


 <div>
   <div className="opacity-80 mb-1">Number of sales (last 12 months)</div>
   <div className="font-bold opacity-80">0.03 ETH ($101 USD)</div>
 </div>


 <div>
   <div className="opacity-80 mb-1">Total Value of All Sales (Lifetime)</div>
   <div className="font-bold opacity-80">0.03 ETH ($101 USD)</div>
 </div>



</div>



<div className="grid grid-cols-2 gap-5 mt-10 mb-10 statsSecondGrid">
  <div className="flex items-center gap-5 font-bold px-4 text-white py-3 rounded-md bg-blue-500">
  <i className="fal fa-bars text-2xl"></i>
  <span className="text-lg opacity-95">Top Sharks Owners</span>
  </div>

  <div className="flex items-center gap-5 font-bold px-4 text-white py-3 rounded-md bg-blue-500">
  <i className="fal fa-bars text-2xl"></i>
  <span className="text-lg opacity-95">All Shark Type & Attributes</span>
  </div>
  
</div>


</div>







<div className="relative largestSalesParent">
<div id="largestSales" className="widthMax py-24 mx-auto px-7 mt-40 mb-20 scroll-mt-32">


<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 sectionTitle">Largest Sales</div>
<LargestSales />



</div>
<div className="asd absolute left 0 bottom-0"></div>

</div>








{/* FAQ */}
<div id="faq" className="px-7 mt-40 mx-auto scroll-mt-32 mb-14">
<div className="font-bold w-fit text-4xl mx-auto text-black mb-20 opacity-70 faqTitle sectionTitle">Have Questions?</div>

                <FAQ title="Where can I buy a PunkShark?" answer="All PunkSharks are minted on OpenSea. You can buy any PunkShark easily and add it to your personal NFT collection." />
                <FAQTutorial />
                <FAQ title="How much gas fee do I have to pay to buy a PunkShark?"  answer="You do not have to pay any gas fee to buy a PunkShark. It is on Polygon blockchain." />
                <FAQ title="Do I need to get verified or whitelisted?"  answer="All PunkSharks are already minted on OpenSea. There is no need to get verified or whitelisted." />
                <FAQ title="What is proof of ownership in the provenance record?"  answer="You can verify each PunkShark NFT against each DNA hash present in the smart contract so nobody can duplicate, steal or mint it ever on any other blockchain. It represents the true ownership of the NFT holder." />


</div>





</div>




   </>
  )
}
