import { FormInput, SubmitBtn } from "../components"; // Corrected the import
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 py-8 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test" // Corrected the prop name
        />
        <div className="mt-4">
          <SubmitBtn text="login" /> {/* Corrected the component name */}
          <button type="button" className="btn btn-secondary btn-block">
            guest user
          </button>
          <p className="text-center">
            Not a member yet?{" "}
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize"
            >
              Register
            </Link>
          </p>
        </div>
        <FormInput type="password" label="password" defaultValue="secret" />{" "}
        {/* Corrected the prop name */}
      </Form>
    </section>
  );
};

export default Login;
