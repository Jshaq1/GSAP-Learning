import Hero from './Hero/Hero'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Hero/Banner'
import BannerStory from './Hero/BannerStory'
import HeroAnimations from './Animations/Hero-Animations'
import localFont from "next/font/local";
const gooey = localFont({ src: ".././fonts/Nightydemo.ttf" });
import berries from "../Assets/strwaberries.png";
import blueberries from "../Assets/blueberries.png";


export {
    Hero,
    Navbar, 
    Footer,
    Banner, 
    BannerStory, 
    HeroAnimations,
    gooey,
    berries, 
    blueberries
}