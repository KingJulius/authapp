import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/Wrapper/Wrapper";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from 'formik';
import login_validate from '../utils/validate';

export const Login = () => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validate : login_validate,
    onSubmit
  });

  async function onSubmit(values){
    console.log(values)
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  // Github Login 
  async function handleGithubSignin(){
    signIn('github', { callbackUrl : "http://localhost:3000"})
  }
  
  return (
    <Wrapper>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input_text}
              data-testid="email"
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input
              type={`${show ? "text" : "password"}`}
              placeholder="password"
              className={styles.input_text}
              data-testid="password"
              {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button} data-testid="login_btn" >
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom} onClick={handleGoogleSignin}>
              Sign In with Google{" "}
              <Image
                src={"/assets/google.svg"}
                width="20"
                height={20}
                alt="Google SvG"
              ></Image>
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom} onClick={handleGithubSignin}>
              Sign In with Github{" "}
              <Image
                src={"/assets/github.svg"}
                width={25}
                height={25}
                alt="GitHub SvG"
              ></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          dont have an account yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Wrapper>
  );
};

export default Login;
