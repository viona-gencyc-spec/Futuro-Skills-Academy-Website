import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Shape Your Future with',
    'home.hero.subtitle': 'Professional Skills Training',
    'home.hero.description': 'Unlock your potential with our cutting-edge courses designed for the modern workforce. Join thousands of students who have transformed their careers.',
    'home.hero.cta': 'Explore Courses',
    'home.hero.cta2': 'Enroll Now',
    
    'home.features.title': 'Why Choose Futuro Skills?',
    'home.features.expert': 'Expert Instructors',
    'home.features.expert.desc': 'Learn from industry professionals with years of real-world experience.',
    'home.features.flexible': 'Flexible Learning',
    'home.features.flexible.desc': 'Study at your own pace with our flexible online and offline programs.',
    'home.features.career': 'Career Support',
    'home.features.career.desc': 'Get personalized career guidance and job placement assistance.',
    'home.features.community': 'Active Community',
    'home.features.community.desc': 'Join a vibrant community of learners and professionals.',
    
    'home.courses.title': 'Popular Courses',
    'home.courses.subtitle': 'Discover our most sought-after programs',
    'home.courses.cta': 'View All Courses',
    
    'home.stats.students': 'Happy Students',
    'home.stats.courses': 'Available Courses',
    'home.stats.instructors': 'Expert Instructors',
    'home.stats.satisfaction': 'Satisfaction Rate',
    
    // About Page
    'about.hero.title': 'About Futuro Skills Academy',
    'about.hero.description': 'Empowering learners to build the skills they need for tomorrow\'s careers.',
    
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To provide accessible, high-quality education that bridges the gap between traditional learning and industry demands, preparing students for successful careers in the digital age.',
    
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To become the leading platform for professional skill development, creating a global community of empowered learners and successful professionals.',
    
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We maintain the highest standards in everything we do.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We continuously evolve our methods and technologies.',
    'about.values.accessibility': 'Accessibility',
    'about.values.accessibility.desc': 'Quality education should be available to everyone.',
    'about.values.community': 'Community',
    'about.values.community.desc': 'We foster a supportive learning environment.',
    
    // Courses Page
    'courses.hero.title': 'Our Courses',
    'courses.hero.description': 'Choose from our comprehensive range of professional development courses.',
    
    'courses.enrollment.title': 'Ready to Start Learning?',
    'courses.enrollment.description': 'Fill out the form below to enroll in your chosen course.',
    
    'courses.form.name': 'Full Name',
    'courses.form.email': 'Email Address',
    'courses.form.phone': 'Phone Number',
    'courses.form.course': 'Select Course',
    'courses.form.message': 'Additional Message (Optional)',
    'courses.form.submit': 'Submit Enrollment',
    'courses.form.success': 'Thank you! Your enrollment request has been submitted successfully.',
    'courses.form.error': 'Please fill in all required fields.',
    
    // Contact Page
    'contact.hero.title': 'Get in Touch',
    'contact.hero.description': 'Have questions? We\'re here to help you start your learning journey.',
    
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Office Hours',
    'contact.info.hours.value': 'Monday - Friday: 9:00 AM - 6:00 PM',
    
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.description': 'Empowering the next generation of professionals with cutting-edge skills and knowledge.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.learnmore': 'Learn More',
    'common.close': 'Close',
    'common.submit': 'Submit',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.courses': 'Formations',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Façonnez Votre Avenir avec',
    'home.hero.subtitle': 'Formation Professionnelle',
    'home.hero.description': 'Libérez votre potentiel avec nos cours de pointe conçus pour la main-d\'œuvre moderne. Rejoignez des milliers d\'étudiants qui ont transformé leur carrière.',
    'home.hero.cta': 'Explorer les Formations',
    'home.hero.cta2': 'S\'inscrire Maintenant',
    
    'home.features.title': 'Pourquoi Choisir Futuro Skills ?',
    'home.features.expert': 'Instructeurs Experts',
    'home.features.expert.desc': 'Apprenez avec des professionnels de l\'industrie ayant des années d\'expérience.',
    'home.features.flexible': 'Apprentissage Flexible',
    'home.features.flexible.desc': 'Étudiez à votre rythme avec nos programmes en ligne et hors ligne flexibles.',
    'home.features.career': 'Support Carrière',
    'home.features.career.desc': 'Bénéficiez de conseils personnalisés et d\'assistance pour le placement professionnel.',
    'home.features.community': 'Communauté Active',
    'home.features.community.desc': 'Rejoignez une communauté dynamique d\'apprenants et de professionnels.',
    
    'home.courses.title': 'Formations Populaires',
    'home.courses.subtitle': 'Découvrez nos programmes les plus demandés',
    'home.courses.cta': 'Voir Toutes les Formations',
    
    'home.stats.students': 'Étudiants Satisfaits',
    'home.stats.courses': 'Formations Disponibles',
    'home.stats.instructors': 'Instructeurs Experts',
    'home.stats.satisfaction': 'Taux de Satisfaction',
    
    // About Page
    'about.hero.title': 'À Propos de Futuro Skills Academy',
    'about.hero.description': 'Permettre aux apprenants de développer les compétences nécessaires pour les carrières de demain.',
    
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Fournir une éducation accessible et de haute qualité qui comble l\'écart entre l\'apprentissage traditionnel et les demandes de l\'industrie, préparant les étudiants à des carrières réussies à l\'ère numérique.',
    
    'about.vision.title': 'Notre Vision',
    'about.vision.description': 'Devenir la plateforme leader pour le développement des compétences professionnelles, créant une communauté mondiale d\'apprenants autonomes et de professionnels prospères.',
    
    'about.values.title': 'Nos Valeurs',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Nous maintenons les plus hauts standards dans tout ce que nous faisons.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Nous faisons continuellement évoluer nos méthodes et technologies.',
    'about.values.accessibility': 'Accessibilité',
    'about.values.accessibility.desc': 'Une éducation de qualité devrait être accessible à tous.',
    'about.values.community': 'Communauté',
    'about.values.community.desc': 'Nous favorisons un environnement d\'apprentissage solidaire.',
    
    // Courses Page
    'courses.hero.title': 'Nos Formations',
    'courses.hero.description': 'Choisissez parmi notre gamme complète de cours de développement professionnel.',
    
    'courses.enrollment.title': 'Prêt à Commencer l\'Apprentissage ?',
    'courses.enrollment.description': 'Remplissez le formulaire ci-dessous pour vous inscrire à votre formation choisie.',
    
    'courses.form.name': 'Nom Complet',
    'courses.form.email': 'Adresse E-mail',
    'courses.form.phone': 'Numéro de Téléphone',
    'courses.form.course': 'Sélectionner une Formation',
    'courses.form.message': 'Message Supplémentaire (Optionnel)',
    'courses.form.submit': 'Soumettre l\'Inscription',
    'courses.form.success': 'Merci ! Votre demande d\'inscription a été soumise avec succès.',
    'courses.form.error': 'Veuillez remplir tous les champs obligatoires.',
    
    // Contact Page
    'contact.hero.title': 'Contactez-nous',
    'contact.hero.description': 'Vous avez des questions ? Nous sommes là pour vous aider à commencer votre parcours d\'apprentissage.',
    
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'E-mail',
    'contact.info.hours': 'Heures d\'Ouverture',
    'contact.info.hours.value': 'Lundi - Vendredi : 9h00 - 18h00',
    
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    
    // Footer
    'footer.description': 'Donner les moyens à la prochaine génération de professionnels avec des compétences et des connaissances de pointe.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés.',
    
    // Common
    'common.loading': 'Chargement...',
    'common.learnmore': 'En Savoir Plus',
    'common.close': 'Fermer',
    'common.submit': 'Soumettre',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};