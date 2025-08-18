import GuidePageStereoType from "./GuidePageStereoType";
import { ReactComponent as SignupIcon } from "../Icons/add-male-user-icon.svg";
const SignupGuidePage = () =>{
    return(
        <>
        <GuidePageStereoType title = {"How to sign up"} 
        description={"Signing up for an Alitex account is quick, secure, and straightforward. To begin, click the Sign Up button on the homepage and provide your basic information, including a username, phone number, and password. After submitting your details, you will be prompted to complete identity verification to comply with regulatory requirements. This process may include uploading identification documents and verifying your phone number or email. Once your account is verified, you gain full access to Alitex’s trading and wallet features. Always use a strong password and enable two-factor authentication (2FA) for enhanced account security. By following these steps, you can safely create an Alitex account and start trading with confidence."}
        />
        <SignupIcon className = "guide-icon"/>
        </>
        
    )
}
export default SignupGuidePage;