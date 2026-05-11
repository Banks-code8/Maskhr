import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

export default function SocialMediaItem({ color, position }) {
  return (
    <section
      className={`my-[20px] flex items-center justify-center gap-8 text-white md:justify-start`}
    >
      <a
        href="https://www.instagram.com/tinqlab/"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaInstagram
          size={50}
          className="text-darkestBlue rounded-[10px] p-2 text-secondary transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />{' '}
      </a>
      <a
        href="https://x.com/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaXTwitter
          size={50}
          className="text-darkestBlue rounded-[10px] p-2 text-secondary transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>
      <a
        href="https://www.facebook.com/people/Tinqlab/100064552795813/"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaYoutube
          size={50}
          className="text-darkestBlue rounded-[10px] p-2 text-secondary transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>{' '}
      <a
        href="https://linkedin.com/company/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=""
      >
        <FaTiktok
          size={50}
          className="text-darkestBlue rounded-[10px] p-2 text-secondary transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>
    </section>
  );
}
