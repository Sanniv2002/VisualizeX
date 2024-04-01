import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verify } from "jsonwebtoken"

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      // Check if JWT exists in local storage
      const token = localStorage.getItem('token');

      // If JWT does not exist or is invalid, redirect to login page
      if (!token?.startsWith("Bearer") || !token || !isValidJWT(token.split(" ")[1])) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent />
  };

  return Wrapper;
};

// Function to validate JWT (replace this with your actual validation logic)
const isValidJWT = (token: string): boolean => {
    try{
        const user = verify(token, "visualsecretkey")
        if(user) return true
    }  
    catch(e){
        return false
    }
  return false
};

export default withAuth;
