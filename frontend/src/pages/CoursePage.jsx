import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SubMenu from '../components/SubMenu';
import CourseHero from '../components/CourseHero';
import Differentials from '../components/Differentials';
import Section from '../components/Section';
import MatrizCurricular from '../components/MatrizCurricular';
import InfrastructureCarousel from '../components/InfrastructureCarousel';
import Testimonials from '../components/Testimonials';
import Coordination from '../components/Coordination';
import FAQ from '../components/FAQ';
import { COURSES, COURSE_EXTRAS, COMMON_TESTIMONIALS } from '../data/courses';

const CoursePage = () => {
  const { slug } = useParams();
  const course = COURSES[slug];
  const extras = COURSE_EXTRAS[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (course) {
      document.title = `${course.name} — FACISA`;
    }
  }, [slug, course]);

  if (!course || !extras) {
    return <Navigate to="/curso/medicina-veterinaria" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <CourseHero course={course} />
        <SubMenu courseName={course.name} />
        <Differentials courseName={course.name} items={course.differentials} />

        <Section id="sobre" title="Sobre o Curso" content={course.about} bg="bg-white" />
        <Section id="mercado" title="Mercado de Trabalho" content={course.market} bg="bg-gray-50" />
        <Section id="ensino" title="Ensino" content={course.teaching} bg="bg-white" />

        <MatrizCurricular items={extras.matriz} />
        <InfrastructureCarousel course={course} images={extras.gallery} />
        <Testimonials items={COMMON_TESTIMONIALS} />
        <Coordination course={course} photo={extras.coordinatorPhoto} />
        <FAQ items={course.faq} />
      </main>
    </div>
  );
};

export default CoursePage;
