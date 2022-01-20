import React from "react";
import useForm from "./useForm";
import validate from "./validator";

const SignUpForm = () => {
  const {handleChange, values, handleSubmit, errors} = useForm(validate)
  return (
    <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
      <h1 class="mb-8 text-3xl text-center">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="username"
          placeholder="Username"
          value = {values.username}
          onChange = {handleChange}
        />
        {errors.username && <p class="text-sm text-red-600">{errors.username}</p>}
        <input
          id="email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          value = {values.email}
          onChange = {handleChange}
        />
        {errors.email && <p class="text-sm text-red-600">{errors.email}</p>}
        <input
          id="password"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
          value = {values.password}
          onChange = {handleChange}
        />
        {errors.password && <p class="text-sm text-red-600">{errors.password}</p>}
        <input
          id="password2"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password2"
          placeholder="Confirm Password"
          value = {values.password2}
          onChange = {handleChange}
        />
        {errors.password2 && <p class="text-sm text-red-600">{errors.password2}</p>}
        <button
          type="submit"
          class="w-full font-bold text-center text-white py-3 rounded bg-green-500 hover:bg-green-dark focus:outline-none my-1"
        >
          Create Account
        </button>
      </form>
      <div class="text-grey-dark mt-6">
        Already have an account?&nbsp;
        <a
          class="no-underline border-b border-blue-500 text-blue-500"
          href="../login/"
        >
          Log in
        </a>
        .
      </div>
    </div>
  )
}

export default SignUpForm
