import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      title: t('home.features.expert'),
      description: t('home.features.expert.desc'),
    },
    {
      icon: BookOpen,
      title: t('home.features.flexible'),
      description: t('home.features.flexible.desc'),
    },
    {
      icon: Award,
      title: t('home.features.career'),
      description: t('home.features.career.desc'),
    },
    {
      icon: Users,
      title: t('home.features.community'),
      description: t('home.features.community.desc'),
    },
  ];

  const popularCourses = [
    {
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Digital Marketing Mastery',
      description: 'Complete guide to SEO, social media, and online advertising',
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Data Science with Python',
      description: 'Master data analysis, machine learning, and visualization',
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-white dark:to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 pt-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="slideRight">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight animate-fade-in">
                  <span className="block">{t('home.hero.title')}</span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-up">
                    {t('home.hero.subtitle')}
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in animation-delay-200">
                  {t('home.hero.description')}
                </p>
                <div className="flex justify-center lg:justify-start animate-slide-up animation-delay-400">
                  <Link
                    to="/courses"
                    className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group animate-float"
                  >
                    {t('home.hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={300}>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Students learning"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('home.features.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 200}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 animate-fade-in">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed animate-slide-up animation-delay-200">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('home.courses.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('home.courses.subtitle')}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {popularCourses.map((course, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-gray-700 hover:border-primary/20 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                      {course.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Duration: {course.duration}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                      {t('common.learnmore')}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Link
                to="/courses"
                className="inline-flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              >
                {t('home.courses.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to success.
            </p>
            <Link
              to="/courses"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center group"
            >
              {t('home.hero.cta2')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;