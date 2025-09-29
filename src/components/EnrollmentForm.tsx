import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Course {
  id: number;
  title: string;
}

interface EnrollmentFormProps {
  courses: Course[];
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ courses }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    plan: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (!formData.plan) {
      newErrors.plan = 'Please select a plan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send the data to your backend API
      console.log('Enrollment data:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        plan: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t('courses.form.success')}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('courses.form.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.name
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary'
              } focus:outline-none`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('courses.form.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.email
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary'
              } focus:outline-none`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('courses.form.phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.phone
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary'
              } focus:outline-none`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('courses.form.course')} *
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.course
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary'
              } focus:outline-none`}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.course}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="plan" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Study Plan *
          </label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
              errors.plan
                ? 'border-red-300 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:border-primary'
            } focus:outline-none`}
          >
            <option value="">Select your preferred study plan</option>
            <option value="weekday">Week Day</option>
            <option value="weekend">Weekend</option>
            <option value="online">Online</option>
          </select>
          {errors.plan && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.plan}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('courses.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:outline-none transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
            placeholder="Tell us about your learning goals and any questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {t('courses.form.submit')}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;