import { UserRegistrationForm } from "@/components/UserRegistrationForm";

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Create an Account</h1>
      <div className="max-w-md mx-auto">
        <UserRegistrationForm />
      </div>
    </div>
  );
};

export default Register;