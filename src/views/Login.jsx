import Logo from "../assets/images/netflix.png"

function Login() {
    return <div className='login_container' style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/ee964934-b7b3-41f7-8709-29ab9d257065/FR-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}><nav>
        <div className="brand">
            <img src={Logo} alt="logo" />
        </div></nav>

        <div className='input_container'>
            <div className='input_inner_container'>
                <div className='row title'><p>Sign in</p></div>
                <div className='row'><input type='email' placeholder="Email" /></div>
                <div className='row'><input type='password' placeholder="Password" />
                    <button>Sign in</button>
                </div>
                <div className='signin_choices'>
                    <label className='remember_me'>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <p>Need help?</p>
                </div>
            </div>
        </div>
    </div>;

}

export default Login;
