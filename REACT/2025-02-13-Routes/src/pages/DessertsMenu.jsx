// https://github.com/frontendmentorio/product-list-with-cart

import styles from './DessertsMenu.module.css'

import WaffleLogo from '../assets/DessertsImages/waffle-desktop.jpg' 
import TiramisuLogo from '../assets/DessertsImages/tiramisu-desktop.jpg' 
import PannaCottaLogo from '../assets/DessertsImages/panna-cotta-desktop.jpg' 
import MeringueLogo from '../assets/DessertsImages/meringue-desktop.jpg' 
import MacaronLogo from '../assets/DessertsImages/macaron-desktop.jpg' 
import CremeBruleeLogo from '../assets/DessertsImages/creme-brulee-desktop.jpg' 
import CakeLogo from '../assets/DessertsImages/cake-desktop.jpg' 
import BrownieLogo from '../assets/DessertsImages/brownie-desktop.jpg' 
import BaklavaLogo from '../assets/DessertsImages/baklava-desktop.jpg'

import MenuWrap from '../components/Desserts/MenuWrap/MenuWrap'
import ShoppingCartWrap from '../components/Desserts/ShoppingCartWrap/ShoppingCartWrap'

const menuitemsData = [
    {
       image: {
            tumbnail: "./assets/images/image-waffle-thumbnail.jpg",
            mobile: "./assets/images/image-waffle-mobile.jpg",
            tablet: "./assets/images/image-waffle-tablet.jpg",
            desktop: WaffleLogo
       },
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50
    },
    {
        image: {
            tumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: CremeBruleeLogo
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
     },
     {
        image: {
            tumbnail:"./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: MacaronLogo
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
     },
     {
        image: {
            tumbnail:"./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: TiramisuLogo
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
     },
     {
        image: {
            tumbnail:"./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: BaklavaLogo
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
     },
     {
        image: {
            tumbnail:"./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: MeringueLogo
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
     },
     {
        image: {
            tumbnail:"./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: CakeLogo
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
     },
     {
        image: {
            tumbnail:"./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: BrownieLogo
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
     },
     {
        image: {
            tumbnail:"./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: PannaCottaLogo
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
    }
]


function DessertsMenu () {
    return (
        
        <div className={styles.pageContainer}>
            <MenuWrap data={menuitemsData}></MenuWrap>
            <ShoppingCartWrap></ShoppingCartWrap>
        </div>
    )
}

export default DessertsMenu