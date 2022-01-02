import Link from 'next/link'
import {useState} from "react";
const Header = () => {
    const [Menu, setMenu] = useState('');


  let openMenu = () =>{
    setMenu('openMenu');
  }
  
  let closeMenu = () =>{
    setMenu('');

  }

    return (
        <>
              <div className="header   sticky top-0 bg-white py-2">
             <div className="mx-auto w-full px-7 widthMax flex items-center justify-between">
             <div className="logo cursor-pointer"><Link href="/" ><div className="flex items-center gap-2 font-bold"><img src="/images/favicon.png" className="w-14" alt="Logo"/> <span className="opacity-80">Punk Sharks</span></div></Link></div>

<nav className="flex items-center lgScreenNav gap-20 font-bold">
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Home</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Categories</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">FAQ</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Stats</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Largest Sales</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Details</a>
<Link href="/provenance"><div className="px-5 py-3 bg-blue-500 cursor-pointer lgScreenBtn transition-colors hover:bg-blue-600 text-white font-extrabold rounded-md">Provenance</div></Link>

</nav>


<img src="/images/burger-menu.svg" alt="menu icon" className="w-7 cursor-pointer burger-menu hidden" onClick={openMenu} />


<div className={`mobileMenu hidden ${Menu}`}>
<nav className="flex items-center gap-20 font-bold">
<i class="far fa-times cursor-pointer" onClick={closeMenu}></i>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Home</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Categories</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">FAQ</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Stats</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Largest Sales</a>
       <a href="#" className="opacity-70 transition-colors hover:opacity-90">Details</a>
       <Link href="/provenance"><div className="px-5 py-3 bg-blue-500 cursor-pointer transition-colors hover:bg-blue-600 text-white font-extrabold rounded-md">Provenance</div></Link>

</nav>

</div>
             </div>
     </div>

        </>
    )
}

export default Header
