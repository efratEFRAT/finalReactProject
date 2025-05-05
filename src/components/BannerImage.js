import bannerImage from '../assets/1.jpg';

export default function BannerImage() {
  return (
    <img
      src={bannerImage}
      alt="Banner"
      className="img-fluid w-100"
      style={{ maxHeight: 'auto', display: 'block' }}
    />
  );
}
