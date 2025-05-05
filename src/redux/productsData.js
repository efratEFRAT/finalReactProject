
 import g1 from '../assets/11.jpg'
 import g2 from '../assets/11.jpg'
import g3 from '../assets/פס גבינה ואפויה בנוסך ניורק .jpg'
import g4 from '../assets/פס עוגת גבינה ותות.jpg'
import g5 from '../assets/קראנצ גבינה חלבי .jpg'
import g6 from '../assets/תפוא מוקרם.jpg'
import g7 from '../assets/מגשי אירוח בריוש.jpg'
import g8 from '../assets/פרנה.jpg'
import g9 from '../assets/9.jpg'
import g10 from '../assets/מגשי אירוח טוניסאי.jpg'
import g11 from '../assets/מגשי אירוח קוקטייל.jpg'
import g12 from '../assets/מגשי אירוח טורטיות.jpg'
import g13 from '../assets/ביס משולשי דגנים..jpg'
import g14 from '../assets/המבורגר פטריות.jpg'
import g15 from '../assets/מגשי אירוח לבוקר מפנק.jpg'
import g16 from '../assets/מגשי אירוח מיני טורטייה.jpg'
import g17 from '../assets/מיני פיתה סביח.jpg'
import g18 from '../assets/סלמון אפוי בתנור שלם.jpg'
import g19 from '../assets/אורז בטעמים.jpg'
import g20 from '../assets/דג אמנון אפוי בתנור.jpg'
import g21 from '../assets/דג לברק אפוי בתנור 12 יחידות.jpg'
import g22 from '../assets/הום פרייז.jpg'
import g23 from '../assets/מגש טאפאס.jpg'
import g24 from '../assets/מגשי אירוח - סושי.jpg'
import g25 from '../assets/מגשי אירוח אנטיפסטי.jpg'
import g26 from '../assets/מגשי אירוח דג סלמון.jpg'
import g27 from '../assets/נודלס.jpg'

 const products = [
    { id: 1, name: 'פס שוויצריה הקטנה', description: 'עוגת גבינה בסגנון שוויצרי עשיר', price: 45, image: g1 },
    { id: 2, name: 'פס עוגת פירורים', description: 'בסיס בצק פריך עם פירורים למעלה', price: 42, image: g2 },
    { id: 3, name: 'פס גבינה ואפויה נוסח ניו יורק', description: 'עוגת גבינה אפויה קלאסית בסגנון ניו יורקי', price: 48, image: g3 },
    { id: 4, name: 'פס עוגת גבינה ותות', description: 'גבינה עם תותים מעל לבוקר מושלם', price: 46, image: g4 },
    { id: 5, name: 'קראנץ\' גבינה חלבי', description: 'מאפה קראנצ\' מתוק עם גבינה', price: 39, image: g5 },
    { id: 6, name: 'תפוחי אדמה מוקרמים', description: 'תפוח אדמה בתנור עם גבינות', price: 32, image: g6 },
    { id: 7, name: 'מגשי אירוח בריוש', description: 'בריושים קטנים ממולאים', price: 85, image: g7 },
    { id: 8, name: 'פרנה', description: 'לחם פרנה טרי מהתנור', price: 15, image: g8 },
    { id: 9, name: 'מגשי בייגל אמריקאי 15 יחידות', description: 'מבחר בייגלים אמריקאיים', price: 90, image: g9 },
    { id: 10, name: 'מגשי אירוח טוניסאי', description: 'טעמים אותנטיים מהמטבח הטוניסאי', price: 110, image: g10 },
    { id: 11, name: 'מגשי אירוח קוקטייל', description: 'נשנושים קטנים באירוח בסטייל', price: 95, image: g11 },
    { id: 12, name: 'מגשי טורטיות', description: 'טורטיות ממולאות במגוון טעמים', price: 88, image: g12 },
    { id: 13, name: 'ביס משולשי דגנים', description: 'משולשי לחם דגנים עם ממרחים', price: 35, image: g13 },
    { id: 14, name: 'המבורגר פטריות', description: 'המבורגר חלבי עם פטריות מוקפצות', price: 44, image: g14 },
    { id: 15, name: 'מגשי בוקר מפנק', description: 'מגשי בוקר עם מאפים וירקות', price: 120, image: g15 },
    { id: 16, name: 'מיני טורטייה', description: 'מבחר מיני טורטיות עם מילוי עשיר', price: 85, image: g16 },
    { id: 17, name: 'מיני פיתה סביח', description: 'פיתות קטנות עם סביח', price: 75, image: g17 },
    { id: 18, name: 'סלמון אפוי שלם', description: 'סלמון שלם בתנור עם עשבי תיבול', price: 150, image: g18 },
    { id: 19, name: 'אורז בטעמים', description: 'אורז צהוב, ירוק או עם ירקות', price: 30, image: g19 },
    { id: 20, name: 'דג אמנון אפוי', description: 'אמנון בתנור עם תיבול עדין', price: 60, image: g20 },
    { id: 21, name: 'דג לברק בתנור – 12 יחידות', description: 'מנה משפחתית של דג לברק', price: 145, image: g21 },
    { id: 22, name: 'הום פרייז', description: 'תפוחי אדמה קוביות פריכות', price: 28, image: g22 },
    { id: 23, name: 'מגש טאפאס', description: 'מבחר קטן של מנות נשנוש', price: 98, image: g23 },
    { id: 24, name: 'מגש סושי לאירוח', description: 'מגוון סושי באירוח חגיגי', price: 135, image: g24 },
    { id: 25, name: 'מגשי אנטיפסטי', description: 'ירקות קלויים עם תיבול', price: 65, image: g25 },
    { id: 26, name: 'מגש דג סלמון', description: 'סלמון פרוס מוגש קר', price: 110, image: g26 },
    { id: 27, name: 'נודלס', description: 'אטריות מוקפצות עם ירקות', price: 40, image: g27 }
   ];
  
  export default products;