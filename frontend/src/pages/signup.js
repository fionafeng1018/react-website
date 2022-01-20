import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SignUpForm from "../components/form-signup"

const SignUp = () => (
  <Layout>
    <Seo title="Sign Up" />
    <div class="text-center py-8">
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center">
      <SignUpForm></SignUpForm>
    </div>
  </Layout>
)

export default SignUp
