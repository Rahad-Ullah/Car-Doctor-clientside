import about_person from '../../../assets/images/about_us/person.jpg'
import about_parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
    <div className="hero min-h-screen py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-16 items-center justify-center lg:justify-between w-full p-0">
            <div className='relative w-4/5 mx-auto lg:w-full'>
                <img src={about_person} className=" w-10/12 rounded-lg" />
                <img src={about_parts} className="w-3/5 max-w-xs rounded-lg border-8 border-white absolute -bottom-14 right-0" />
            </div>
            <div className='text-center lg:text-left'>
                <h3 className='text-xl font-bold text-primary mb-5'>About Us</h3>
                <h1 className="text-4xl text-secondary font-bold w-3/4 lg:max-w-xs mx-auto lg:mx-0">We are qualified & of experience in this field</h1>
                <p className="py-5 text-light-dark w-4/5 lg:max-w-md mx-auto lg:mx-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                <p className="pb-5 text-light-dark w-4/5 lg:max-w-md mx-auto lg:mx-0">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.  </p>
                <button className="btn btn-primary normal-case text-base">Get More Info</button>
            </div>
        </div>
    </div>
    );
};

export default About;