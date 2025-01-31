import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const useSignUp = () => {
  const navigate = useNavigate();

  const signUp = async (data: SignUpData) => {
    try {
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

      if (!authData.user) {
        toast.error("Failed to create user account");
        return;
      }

      toast.success("Successfully signed up! Please check your email for verification.", {
        duration: 6000,
      });
      
      // Don't navigate immediately after signup since we need email verification
      // Instead, stay on the auth page with a message to check email
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up. Please try again.");
    }
  };

  return { signUp };
};