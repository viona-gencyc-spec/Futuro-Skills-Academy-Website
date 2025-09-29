import React, { useState } from 'react';
import { Clock, Users, Award, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import EnrollmentForm from '../components/EnrollmentForm';

const Courses = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'design', name: 'Design' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'web',
      description: 'Complete web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and database management.',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      rating: 4.9,
      students: 1200,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Live Sessions', 'Project Portfolio', 'Career Support', '1-on-1 Mentoring'],
    },
    {
      id: 2,
      title: 'React Native Mobile Development',
      category: 'mobile',
      description: 'Build cross-platform mobile apps using React Native. Learn to deploy to both iOS and Android app stores.',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 850,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['App Store Deployment', 'Real Projects', 'Industry Mentors', 'Job Assistance'],
    },
    {
      id: 3,
      title: 'Data Science & Machine Learning',
      category: 'data',
      description: 'Master Python, statistics, machine learning algorithms, and data visualization to become a data scientist.',
      duration: '20 weeks',
      level: 'Intermediate to Advanced',
      rating: 4.9,
      students: 950,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Real Datasets', 'ML Projects', 'Industry Tools', 'Certificate'],
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      category: 'marketing',
      description: 'Complete digital marketing course covering SEO, PPC, social media marketing, and analytics.',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      rating: 4.7,
      students: 1400,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Campaign Management', 'Analytics Tools', 'Case Studies', 'Certification'],
    },
    {
      id: 5,
      title: 'UI/UX Design Professional',
      category: 'design',
      description: 'Learn user interface and user experience design principles, prototyping, and modern design tools.',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      rating: 4.8,
      students: 720,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Design Portfolio', 'Industry Tools', 'Client Projects', 'Design System'],
    },
    {
      id: 6,
      title: 'Python Programming Fundamentals',
      category: 'data',
      description: 'Start your programming journey with Python. Perfect for beginners who want to learn coding.',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.6,
      students: 1800,
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Hands-on Projects', 'Code Reviews', 'Practice Exercises', 'Community Support'],
    },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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
                {t('courses.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('courses.hero.description')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course, index) => (
              <AnimatedSection key={course.id} animation="slideUp" delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-gray-700 hover:border-primary/20 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
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
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-sm font-medium shadow-lg">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1.5" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {course.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="flex items-center text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800"
                          >
                            <CheckCircle className="w-3 h-3 mr-1.5" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-800 mt-auto">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('courses.enrollment.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t('courses.enrollment.description')}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <EnrollmentForm courses={courses} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;