import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export const useSignUp = () => {
  const navigate = useNavigate();

  const signUp = async (data) => {
    try {
      // Sign up the user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.name,
          },
        },
      });

      if (signUpError) {
        if (signUpError.message.includes("email_address_invalid")) {
          toast.error("Please enter a valid email address");
        } else {
          toast.error(signUpError.message);
        }
        return;
      }

      // Make sure we have the user data
      if (!authData.user) {
        toast.error("Failed to create user account");
        return;
      }

      toast.success("Successfully signed up! Please check your email for verification.");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Failed to sign up. Please try again.");
    }
  };

  return { signUp };
};