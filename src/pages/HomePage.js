import BannerImage from "../components/BannerImage";
import InfoBox from '../components/InfoBox';
import ImageGallery from '../components/ImageGallery';
import FirstInfoBox from '../components/FirstInfoBox';
import SecondInfoBox from '../components/SecondInfoBox';
import ThirdInfoBox from '../components/ThirdInfoBox';
import About from '../components/About';
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <div className="text-warning min-vh-100" style={{ backgroundColor: '#0d0d0d' }} dir="rtl">
      <BannerImage />
      <InfoBox />
      <ImageGallery />
      <FirstInfoBox />
      <SecondInfoBox />
      <ThirdInfoBox />
      <About />
      <ContactForm />
    </div>
  );
}
  