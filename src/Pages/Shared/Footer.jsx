import logo from '../../assets/logo.svg'


const Footer = () => {
    return (
    <div className='bg-base-200 mt-16'>
        <footer className="footer max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8 text-base-content">
            <aside>
                <img src={logo} alt="" />
                <p>Car Doctor Ltd.<br/>Providing reliable service since 2002</p>
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
    </div>
    );
};

export default Footer;