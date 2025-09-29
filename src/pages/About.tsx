import React from 'react';
import { Target, Eye, Heart, Lightbulb, Users as Users2, Globe, Crown, UserCheck, Code, Megaphone, Smartphone, BookOpen, FlaskConical, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: Globe,
      title: t('about.values.accessibility'),
      description: t('about.values.accessibility.desc'),
    },
    {
      icon: Users2,
      title: t('about.values.community'),
      description: t('about.values.community.desc'),
    },
  ];

  const team = [
    {
      name: 'Mati Zine El Abidine',
      role: 'CEO and Founder',
      icon: Crown,
      bio: 'Visionary leader with extensive experience in education and technology innovation.',
    },
    {
      name: 'Dima',
      role: 'Manager',
      icon: UserCheck,
      bio: 'Experienced operations manager ensuring smooth day-to-day operations and student success.',
    },
    {
      name: 'Benouali Sofiane',
      role: 'Design & Development Manager',
      icon: Code,
      bio: 'Technical expert leading our development team and ensuring cutting-edge educational platforms.',
    },
    {
      name: 'Belkhadem Redha',
      role: 'Marketing Manager',
      icon: Megaphone,
      bio: 'Marketing strategist driving growth and building our brand presence in the education sector.',
    },
    {
      name: 'Mahrech Amine',
      role: 'App Developer',
      icon: Smartphone,
      bio: 'Skilled mobile application developer creating innovative educational solutions and user-friendly interfaces.',
    },
    {
      name: 'Hadjer',
      role: 'English Teacher',
      icon: BookOpen,
      bio: 'Passionate English educator dedicated to helping students master language skills and communication.',
    },
    {
      name: 'Hanane',
      role: 'English Teacher',
      icon: BookOpen,
      bio: 'Experienced English instructor focused on interactive learning and student engagement.',
    },
    {
      name: 'Reda',
      role: 'Lab Director',
      icon: FlaskConical,
      bio: 'Laboratory director ensuring hands-on practical experience and maintaining state-of-the-art facilities.',
    },
    {
      name: 'Tayeb',
      role: 'Graphic Designer',
      icon: Palette,
      bio: 'Creative graphic designer bringing visual excellence to our educational materials and brand identity.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-white dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="slideUp">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.hero.description')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  {t('about.mission.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {t('about.mission.description')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Eye className="w-8 h-8 text-secondary mr-4" />
                  {t('about.vision.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.values.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} animation="slideUp" delay={index * 150}>
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Passionate educators and industry experts dedicated to your success
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <AnimatedSection key={index} animation="slideUp" delay={index * 150}>
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group text-center p-6 h-full flex flex-col">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-3 text-sm">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;