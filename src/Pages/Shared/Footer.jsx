import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'


const Footer = () => {
    return (
    <div className='bg-base-200 mt-16'>
        <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-base-content'>
            <footer className="footer place-items-center md:place-items-start py-16 pb-10">
                <aside className='flex flex-col items-center md:items-start'>
                    <img src={logo} alt="" />
                    <p className='text-center md:text-start'>Car Doctor Ltd.<br/>Providing reliable service since 2002</p>
                </aside> 
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover hover:link-primary">Branding</a> 
                    <a className="link link-hover hover:link-primary">Design</a> 
                    <a className="link link-hover hover:link-primary">Marketing</a> 
                    <a className="link link-hover hover:link-primary">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover hover:link-primary">About us</a> 
                    <a className="link link-hover hover:link-primary">Contact</a> 
                    <a className="link link-hover hover:link-primary">Jobs</a> 
                    <a className="link link-hover hover:link-primary">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover hover:link-primary">Terms of use</a> 
                    <a className="link link-hover hover:link-primary">Privacy policy</a> 
                    <a className="link link-hover hover:link-primary">Cookie policy</a>
                </nav>
            </footer>
            <div className='flex flex-col lg:flex-row justify-between items-center text-xs lg:text-sm py-4 border-t border-zinc-300'>
                <p>&copy; Copyright 2023 | All Rights Reserved</p>
                <p>Developed By <Link to={'https://github.com/Rahad-Ullah'}className='link link-hover text-primary'>Rahad Developer</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Footer;