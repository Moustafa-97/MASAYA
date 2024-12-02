import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        ourMenu: "Our Menu",
        reserve: "Reserve",
      },
      footer: {
        info: "Info",
        gallery: "Gallery",
        reviews: "Reviews",
        findUs: "Find Us",
        contactUs: "Contact Us",
      },
      // done
      homeHeader: {
        title: "Experience Culinary Excellence in the Heart of the City",
        bigTitle:
          "Masaya, a unique dining experience in Brcelona, combines traditional flavors with modern elements for a memorable dining experience with signature dishes and a cozy ambiance.",
        reserveNow: "Reserve Now",
        topRated: "Top Rated",
        onGoogle: "On Google",
      },
      // done
      aboutHeader: {
        title: "ABOUT MASAYA",
        bigTitle:
          "where the authentic taste of Lebanon meets the vibrant heart of Barcelona.",
        paragraph:
          "Masaya offers a culinary experience showcasing Lebanese traditions and flavors, featuring signature mezze platters and grilled dishes, showcasing the warmth of Lebanese hospitality in an elegant, modern setting.",
      },

      // done
      about: {
        title: "About us",
        bigTitle: "Experience Lebanese Tradition in Barcelona",
        paragraph:
          "Masaya is more than just a restaurant; it is the meeting place of Lebanese history and Barcelona's dynamic spirit. We bring the real flavors of Lebanon to your plate, providing a gourmet experience that combines tradition and innovation. Inspired by traditional recipes and made with fresh, local ingredients, our menu captures the spirit of Lebanese cuisine in every bite.",
      },
      // done
      explore: {
        title: "TASTE OF LEBANESE CUSINE.",
        bigTitle: "Explore Our Flavorful Menu",
        paragraph:
          "At Masaya, we pride ourselves on providing an exceptional dining experience infused with the rich flavors of Lebanese cuisine. But don't just take our word for it—here’s what our guests have to say:",
      },
      // done
      findUs: {
        title: "FIND US",
        bigTitle: "Authentic Lebanese Flavors,Steps from Casa Batlló",
        paragraph:
          "Located just a 3-minute walk from the iconic Casa Batlló in Barcelona, Masaya brings the flavors of Lebanon to life in the heart of the city. Rooted in authentic Lebanese culinary traditions, ",
      },
      // done
      testimonial: {
        title: "WHAT THEY SAY",
        bigTitle: "Our Testimonial",
        paragraph:
          "At Masaya, we pride ourselves on providing an exceptional dining experience infused with the rich flavors of Lebanese cuisine. But don't just take our word for it—here’s what our guests have to say:",
      },
      // done
      gallery: {
        title: "GALLERY",
        bigTitle: "The Essence of Lebanese Cuisine",
        paragraph:
          "Step into a world where vibrant flavors meet exquisite artistry. Our gallery showcases the heart and soul of Masaya Lebanese Restaurant, featuring beautifully crafted dishes.",
      },
      // done
      signature: {
        title: "OUR SIGNATURE",
        bigTitle: "Falafel",
        paragraph:
          " At Masaya, our falafel is a true celebration of Lebanese tradition, offering a crispy, golden bite packed with vibrant flavors. Made from a blend of chickpeas, fresh herbs, and a secret mix of spices, our falafel is always freshly prepared and served with authentic sides like tahini, pickles, and pita bread. Whether you're a seasoned falafel lover or trying it for the first time, each bite brings you closer to the essence of Lebanon, right here in Barcelona. Perfect as a light snack or part of a hearty mezze, Masaya’s falafel is the ultimate taste of the Middle East!",
      },
      // done
      menuHeader: {
        title: "OUR MENU",
        bigTitle:
          "Discover the rich, flavorful essence of Lebanese cuisine, curated with passion and tradition.",
        paragraph:
          "Masaya invites you to savor the true essence of Lebanon with signature mezze platters and succulent grilled dishes, all crafted to deliver a rich culinary journey.",
      },
      // done
      menuFilter: {
        all: "All",
        appetizer: "Appetizer",
        bakery: "Bakery",
        meat: "Meat",
        chicken: "Chicken",
        
      },
      reservation: {
        title: "RESERVATION",
        bigTitle:
          "Reserve Your Table Today And Indulge In The Flavors Of Lebanon, Right In The Heart Of Barcelona",
        paragraph:
          "Masaya offers a culinary experience showcasing Lebanese traditions and flavors, featuring signature mezze platters and grilled dishes, showcasing the warmth of Lebanese hospitality in an elegant, modern setting.",
        name: "Your Name",
        phone: "Phone Number",
        date: "Select Date",
        time: "Select Time",
        guest: "Guests",
        book: "BOOK YOUR TABLE AT MASAYA",
        bookP: "Enjoy authentic Lebanese cuisine at your convenience",
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Nosotros",
        ourMenu: "Nuestro Menú",
        reserve: "Reservar",
      },
      footer: {
        info: "Información",
        gallery: "Galería",
        reviews: "Opiniones",
        findUs: "Encuéntranos",
        contactUs: "Contáctanos",
      },
      homeHeader: {
        title: "Experiencia Culinaria de Excelencia en el Corazón de la Ciudad",
        bigTitle:
          "Masaya, una experiencia gastronómica única en Barcelona, combina sabores tradicionales con elementos modernos para una experiencia memorable con platos emblemáticos y un ambiente acogedor.",
        reserveNow: "Reserva Ahora",
        topRated: "Alta Calificación",
        onGoogle: "En Google",
      },
      aboutHeader: {
        title: "SOBRE MASAYA",
        bigTitle:
          "donde el auténtico sabor del Líbano se encuentra con el vibrante corazón de Barcelona.",
        paragraph:
          "Masaya ofrece una experiencia culinaria que muestra las tradiciones y sabores libaneses, con platillos de mezze y parrillas emblemáticas, destacando la calidez de la hospitalidad libanesa en un entorno elegante y moderno.",
      },
      about: {
        title: "Sobre Nosotros",
        bigTitle: "Experimenta la Tradición Libanesa en Barcelona",
        paragraph:
          "Masaya es más que un restaurante; es el punto de encuentro de la historia libanesa y el dinámico espíritu de Barcelona. Traemos los verdaderos sabores del Líbano a tu plato, brindando una experiencia gourmet que combina tradición e innovación. Inspirado en recetas tradicionales y hecho con ingredientes frescos y locales, nuestro menú captura el espíritu de la cocina libanesa en cada bocado.",
      },
      explore: {
        title: "SABOR DE LA COCINA LIBANESA.",
        bigTitle: "Explora Nuestro Sabroso Menú",
        paragraph:
          "En Masaya, nos enorgullecemos de ofrecer una experiencia gastronómica excepcional impregnada de los ricos sabores de la cocina libanesa. Pero no te fíes solo de nuestra palabra, esto es lo que dicen nuestros invitados:",
      },
      findUs: {
        title: "ENCUÉNTRANOS",
        bigTitle: "Sabores Auténticos del Líbano, a Pocos Pasos de Casa Batlló",
        paragraph:
          "Ubicado a solo 3 minutos a pie de la icónica Casa Batlló en Barcelona, Masaya da vida a los sabores del Líbano en el corazón de la ciudad. Con raíces en las tradiciones culinarias auténticas del Líbano,",
      },
      testimonial: {
        title: "LO QUE DICEN",
        bigTitle: "Nuestros Testimonios",
        paragraph:
          "En Masaya, nos enorgullecemos de ofrecer una experiencia gastronómica excepcional impregnada de los ricos sabores de la cocina libanesa. Pero no te fíes solo de nuestra palabra, esto es lo que dicen nuestros invitados:",
      },
      gallery: {
        title: "GALERÍA",
        bigTitle: "La Esencia de la Cocina Libanesa",
        paragraph:
          "Sumérgete en un mundo donde los sabores vibrantes se encuentran con el arte exquisito. Nuestra galería muestra el corazón y el alma del restaurante libanés Masaya, con platos bellamente elaborados.",
      },
      signature: {
        title: "NUESTRO PLATO EMBLEMÁTICO",
        bigTitle: "Falafel",
        paragraph:
          "En Masaya, nuestro falafel es una verdadera celebración de la tradición libanesa, ofreciendo un bocado crujiente y dorado lleno de sabores vibrantes. Hecho con una mezcla de garbanzos, hierbas frescas y una mezcla secreta de especias, nuestro falafel siempre se prepara fresco y se sirve con guarniciones auténticas como tahini, pepinillos y pan de pita. Ya seas un amante del falafel o lo pruebes por primera vez, cada bocado te acerca a la esencia del Líbano, aquí mismo en Barcelona. Perfecto como un tentempié ligero o como parte de un abundante mezze, el falafel de Masaya es el sabor definitivo de Oriente Medio.",
      },
      menuHeader: {
        title: "NUESTRO MENÚ",
        bigTitle:
          "Descubre la rica y sabrosa esencia de la cocina libanesa, curada con pasión y tradición.",
        paragraph:
          "Masaya te invita a saborear la verdadera esencia del Líbano con platillos emblemáticos de mezze y parrilladas suculentas, todas diseñadas para brindar un rico viaje culinario.",
      },
      menuFilter: {
        all: "Todo",
        appetizer: "Entrantes",
        bakery: "Panadería",
        meat: "Carne",
        chicken: "Pollo",
      },
      reservation: {
        title: "RESERVA",
        bigTitle:
          "Reserva Tu Mesa Hoy Y Disfruta De Los Sabores Del Líbano, Justo En El Corazón De Barcelona",
        paragraph:
          "Masaya ofrece una experiencia culinaria que destaca las tradiciones y sabores libaneses, con platillos emblemáticos de mezze y parrillas, mostrando la calidez de la hospitalidad libanesa en un entorno elegante y moderno.",
        name: "Tu Nombre",
        phone: "Número de Teléfono",
        date: "Selecciona la Fecha",
        time: "Selecciona la Hora",
        guest: "Invitados",
        book: "RESERVA TU MESA EN MASAYA",
        bookP: "Disfruta de la auténtica cocina libanesa a tu conveniencia",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
