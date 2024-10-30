import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      home: {
        title: "Welcome to my home page",
      },
      about: {
        title: "About us",
        bigTitle: "Experience Lebanese Tradition in Barcelona",
        paragraph:
          "Masaya is more than just a restaurant; it is the meeting place of Lebanese history and Barcelona's dynamic spirit. We bring the real flavors of Lebanon to your plate, providing a gourmet experience that combines tradition and innovation. Inspired by traditional recipes and made with fresh, local ingredients, our menu captures the spirit of Lebanese cuisine in every bite.",
      },
      explore: {
        title: "TASTE OF LEBANESE CUSINE.",
        bigTitle: "Explore Our Flavorful Menu",
        paragraph:
          "At Masaya, we pride ourselves on providing an exceptional dining experience infused with the rich flavors of Lebanese cuisine. But don't just take our word for it—here’s what our guests have to say:",
      },
      findUs: {
        title: "FIND US",
        bigTitle: "Authentic Lebanese Flavors,Steps from Casa Batlló",
        paragraph:
          "Located just a 3-minute walk from the iconic Casa Batlló in Barcelona, Masaya brings the flavors of Lebanon to life in the heart of the city. Rooted in authentic Lebanese culinary traditions, ",
      },
      testimonial: {
        title: "WHAT THEY SAY",
        bigTitle: "Our Testimonial",
        paragraph:
          "At Masaya, we pride ourselves on providing an exceptional dining experience infused with the rich flavors of Lebanese cuisine. But don't just take our word for it—here’s what our guests have to say:",
      },
    },
  },
  es: {
    translation: {
      home: {
        title: "Bienvenido a mi página de inicio",
      },
      about: {
        title: "Sobre nosotros",
        bigTitle: "Experimenta la tradición libanesa en Barcelona",
        paragraph:
          "Masaya es más que un restaurante; es el punto de encuentro de la historia libanesa y el espíritu dinámico de Barcelona. Traemos los verdaderos sabores del Líbano a tu plato, ofreciendo una experiencia gourmet que combina tradición e innovación. Inspirado en recetas tradicionales y elaborado con ingredientes frescos y locales, nuestro menú captura el espíritu de la cocina libanesa en cada bocado.",
      },
      explore: {
        title: "SABOR DE LA COCINA LIBANESA.",
        bigTitle: "Explora nuestro delicioso menú",
        paragraph:
          "En Masaya, nos enorgullecemos de ofrecer una experiencia gastronómica excepcional, impregnada de los ricos sabores de la cocina libanesa. Pero no solo nos lo tomes a palabra—esto es lo que nuestros invitados tienen que decir:",
      },
      findUs: {
        title: "ENCUÉNTRANOS",
        bigTitle: "Sabores libaneses auténticos, a pasos de Casa Batlló",
        paragraph:
          "Ubicado a solo 3 minutos a pie de la icónica Casa Batlló en Barcelona, Masaya da vida a los sabores del Líbano en el corazón de la ciudad. Con raíces en las auténticas tradiciones culinarias libanesas,",
      },
      testimonial: {
        title: "QUÉ DICEN",
        bigTitle: "Nuestro Testimonio",
        paragraph:
          "En Masaya, nos enorgullecemos de ofrecer una experiencia gastronómica excepcional, impregnada de los ricos sabores de la cocina libanesa. Pero no solo nos lo tomes a palabra—esto es lo que nuestros invitados tienen que decir:",
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
