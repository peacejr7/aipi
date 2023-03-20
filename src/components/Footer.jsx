import React from 'react'

const Footer = () => {
  return (
    <footer className=' block bg-black pt-[45px] pb-[45px]'>
	<div className="md:flex lg:flex items-center justify-between w-full pr-14 pl-14 mr-auto ml-auto">
		<p className="text-[#abb8c3] text-14">AIPI Ltd Copyright &copy; 2023</p>
		<p className="text-[#abb8c3] text-14">
			Developed by 
			<a href="https://awesomity.rw/" target="_blank" className="text-[#fecf0a] underline"> Awesomity Lab</a>
		</p>
	</div>
</footer>
  )
}

export default Footer