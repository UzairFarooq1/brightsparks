import React from 'react';
import { BookOpen, Users, Heart, Zap, GraduationCap, Clock, Award, Target } from 'lucide-react';

const Curriculum = () => {
  const curriculumFeatures = [
    {
      icon: BookOpen,
      title: "CBC (Competency-Based Curriculum)",
      description: "We follow Kenya's modern CBC framework, focusing on developing competencies and skills rather than just knowledge acquisition.",
      subjects: ["Mathematics", "English", "Kiswahili", "Science", "Social Studies", "Creative Arts"]
    },
    {
      icon: Heart,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering Quran, Hadith, Islamic history, and moral teachings for our Muslim students.",
      subjects: ["Quran Recitation", "Islamic History", "Arabic Language", "Islamic Ethics", "Fiqh"]
    },
    {
      icon: Users,
      title: "Christian Religious Education (CRE)",
      description: "Biblical studies and Christian values education to nurture spiritual growth and moral development.",
      subjects: ["Bible Studies", "Christian Ethics", "Church History", "Christian Living", "Prayer & Worship"]
    },
    {
      icon: Zap,
      title: "Life Skills & Character Development",
      description: "Essential life skills and character building programs that prepare students for real-world challenges.",
      subjects: ["Leadership Skills", "Critical Thinking", "Communication", "Problem Solving", "Digital Literacy"]
    }
  ];

  const educationLevels = [
    {
      title: "Early Childhood Development",
      age: "Ages 3-6",
      description: "Foundation learning through play-based activities, basic literacy, numeracy, and social skills development.",
      features: ["Play-based learning", "Basic literacy & numeracy", "Social skills", "Creative expression"]
    },
    {
      title: "Primary Education",
      age: "Grades 1-8",
      description: "Comprehensive CBC curriculum with strong emphasis on core subjects and character development.",
      features: ["CBC curriculum", "Core subjects mastery", "Character building", "Extracurricular activities"]
    },
    {
      title: "Secondary Education",
      age: "Forms 1-4",
      description: "Advanced academic preparation for national examinations and future career paths.",
      features: ["KCSE preparation", "Career guidance", "Advanced subjects", "Leadership development"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Curriculum</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive, well-rounded curriculum that combines academic excellence with 
            character development and spiritual growth for all students.
          </p>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Curriculum Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide holistic education that prepares students 
              for academic success and life beyond school.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {curriculumFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {feature.subjects.map((subject, subIndex) => (
                    <span 
                      key={subIndex} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education Levels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early childhood development to secondary education, we provide 
              continuous learning pathways for students at every stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {educationLevels.map((level, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{level.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                    {level.age}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Learning Approach</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We believe in a student-centered approach that recognizes each child's unique 
                learning style and pace. Our experienced teachers use innovative methods to 
                make learning engaging and effective.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Individualized Learning</h4>
                    <p className="text-gray-600">Tailored instruction to meet each student's needs and learning style.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Flexible Pacing</h4>
                    <p className="text-gray-600">Students progress at their own pace while meeting curriculum standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Achievement Recognition</h4>
                    <p className="text-gray-600">Celebrating every milestone and encouraging continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Assessment & Progress</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Continuous Assessment</h4>
                  <p className="text-blue-100 text-sm">Regular evaluation to track student progress and identify areas for improvement.</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Parent Communication</h4>
                  <p className="text-blue-100 text-sm">Regular updates and meetings to keep parents informed of their child's progress.</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Remedial Support</h4>
                  <p className="text-blue-100 text-sm">Additional support for students who need extra help in specific subjects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;