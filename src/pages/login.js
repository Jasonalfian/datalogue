import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Navbar from "../components/Globals/Navbar"
import "../styles/index.css"
import "normalize.css"

export default function Login() {
  return (
    <Layout>
      <Navbar />
      <div class="globall py-5">
        <div class="welcome">
          <p class="welcomeBig">Welcome Back !</p>
          <div class="userdata">
            <form>
              <label class="login-label">
                <p>Email</p>
                <input
                  type="text"
                  name="email"
                  class="inptt"
                  autoComplete="off"
                />
              </label>
            </form>
            <form>
              <label class="login-label">
                <p>Password</p>
                <input
                  type="text"
                  name="pass"
                  class="inptt"
                  autoComplete="off"
                />
              </label>
            </form>
            <p class="forgot">Forgot Password</p>
          </div>
          <Link to="/Admin/Datasets">
            <div class="submit-button">
              <button class="submit">Login</button>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
