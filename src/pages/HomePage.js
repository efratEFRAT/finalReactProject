import BannerImage from "../components/BannerImage";
import InfoBox from '../components/InfoBox';
import ImageGallery from '../components/ImageGallery';
import FirstInfoBox from '../components/FirstInfoBox';
import SecondInfoBox from '../components/SecondInfoBox';
import ThirdInfoBox from '../components/ThirdInfoBox';
import About from '../components/About';
import ContactForm from "../components/ContactForm";



export default function HomePage() {
    return (<>
        <BannerImage></BannerImage>
        <InfoBox></InfoBox>
        <ImageGallery></ImageGallery>
        <FirstInfoBox></FirstInfoBox>
        <SecondInfoBox></SecondInfoBox>
        <ThirdInfoBox></ThirdInfoBox> 
        <About></About>
        < ContactForm></ContactForm>

        
        </>
    );
    
  }
  