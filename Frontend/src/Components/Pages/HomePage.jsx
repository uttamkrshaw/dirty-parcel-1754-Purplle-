import DefaultNavbar from "../Mini_Components/User_Site/Header/Header"
import Part1 from "../Mini_Components/User_Site/HomePageComponents/Part1";
import Part2 from "../Mini_Components/User_Site/HomePageComponents/Part2";
import Part3 from "../Mini_Components/User_Site/HomePageComponents/Part3";
import Part4 from "../Mini_Components/User_Site/HomePageComponents/Part4";
import Part5 from "../Mini_Components/User_Site/HomePageComponents/Part5";
import Part6 from "../Mini_Components/User_Site/HomePageComponents/Part6";
import Part7 from "../Mini_Components/User_Site/HomePageComponents/Part7";
import Part8 from "../Mini_Components/User_Site/HomePageComponents/Part8";
import Part9 from "../Mini_Components/User_Site/HomePageComponents/Part9";
import Part10 from "../Mini_Components/User_Site/HomePageComponents/Part10";
import DefaultFooter from "../Mini_Components/User_Site/Footer/Footer";

function HomePage(){
    return(
        <>
       <DefaultNavbar />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Part6 />
        <Part7 />
        <Part8 /> 
        <Part9 />
        <Part10 />
        <DefaultFooter />
        </>
    )
}
export default HomePage;