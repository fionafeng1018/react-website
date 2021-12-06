import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const SignUpPage = () => (
    <Layout>
      <Seo title="Home" />
      <h1>Sign Up</h1>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="First"></input>
      </form>
    </Layout>
  )
  
  export default SignUpPage