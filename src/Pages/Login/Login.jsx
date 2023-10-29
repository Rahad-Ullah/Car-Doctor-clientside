import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
  const {signIn} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then((result) => {
      console.log(result.user)
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }).catch((err) => {
      console.log(err)
      Swal.fire({
        title: 'Error!',
        text: 'Login failed',
        icon: 'error',
        confirmButtonText: 'Try again'
      })
    });
  }
  
  return (
    <div className="hero min-h-screen py-8 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-11 gap-16 justify-between items-center">
        <div className="w-full flex justify-center items-center col-span-5">
          <img src={loginImg} alt="" />
        </div>

        <div className="card flex-shrink-0 col-span-6 w-full border md:p-10 lg:p-14">
            <h2 className="text-4xl font-semibold text-light-dark text-center mb-2">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered"
                    name="email"
                    required
                />
                </div>
                <div className="form-control">
                  <label className="label">
                      <span className="label-text font-semibold">Confirm Password</span>
                  </label>
                  <input
                      type="password"
                      placeholder="Your password"
                      className="input input-bordered"
                      name="password"
                      required
                  />
                  <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                      </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary normal-case text-base">Login</button>
                </div>
          </form>
          <p className="font-medium text-sm mb-7 text-center">Or Sign In with</p>
          <div className="flex justify-center gap-4">
              <button className="btn btn-circle group"><FaFacebookF className="text-[#3B5998] group-hover:text-primary"></FaFacebookF></button>
              <button className="btn btn-circle group"><FaLinkedinIn className="text-[#0A66C2] group-hover:text-primary"></FaLinkedinIn></button>
              <button className="btn btn-circle group"><FaGoogle className="text-red-600 group-hover:text-primary"></FaGoogle></button>
          </div>
          <p className="text-[#737373] text-center text-sm mt-10">New to Car Doctor? <Link to={'/sign-up'} className="text-primary font-semibold hover:btn-link">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
