import React from 'react'

const Navbar = () => {
  return (
      <nav className='bg-black text-white flex fixed w-[100%] '>
      <div className='py-5 pl-7'>
        <img className='h-[56px] items-center pl-11' src='https://aipi.rw/wp-content/uploads/2021/07/aipi_logo.png' alt='#'/>
      </div>
      <div className='pt-5 pl-9'>
        <ul className='flex '>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>HOME</a></li>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>ABOUT</a></li>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>SERVICES</a></li>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>BLOG</a></li>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>ROAD TO <br/> GS1 <br/> RWANDA </a></li>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>BLOG</a></li>
            <li className='pr-9 hover:text-[#fecf0a]'> <a href='#'>The <br/>CHAMBERS </a></li>
            <li className=' hover:text-[#fecf0a]'>
                <button className='bg-[#fecf0a] text-black font-bold ml-[60px] h-12 w-40 mt-3   '>Contact <br/>Us</button>
            </li>
            {/* https://aipi.rw/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png 
            https://aipi.rw/wp-content/plugins/translatepress-multilingual/assets/images/flags/de_DE.png
            */}
        </ul>
      </div>
      </nav>
  )
}

export default Navbar
