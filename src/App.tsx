import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, TreePine, Database, Wind, BarChart3, Globe2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-emerald-800 mb-4"
          >
            Environmental Data Analyst
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-700 mb-6"
          >
            Transforming environmental data into actionable insights for a sustainable future
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <a href="#projects" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>
        <div className="lg:w-1/2 h-[400px]">
          <ImageCarousel />
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Data Analysis", desc: "Advanced statistical analysis and data interpretation" },
              { icon: BarChart3, title: "Environmental Modeling", desc: "Predictive modeling and scenario analysis" },
              { icon: Globe2, title: "GIS Mapping", desc: "Spatial analysis and environmental mapping" },
              { icon: Leaf, title: "Ecosystem Assessment", desc: "Biodiversity and habitat evaluation" },
              { icon: Wind, title: "Climate Analysis", desc: "Climate change impact assessment" },
              { icon: TreePine, title: "Forest Management", desc: "Sustainable forestry practices" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-emerald-50 p-6 rounded-lg"
              >
                <skill.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">{skill.title}</h3>
                <p className="text-emerald-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Urban Air Quality Analysis",
                description: "Comprehensive study of air quality patterns in major metropolitan areas using sensor networks and predictive modeling.",
                image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&q=80&w=800",
                tags: ["Air Quality", "Data Analysis", "Urban Planning"]
              },
              {
                title: "Forest Ecosystem Monitoring",
                description: "Long-term monitoring of forest health using remote sensing and ground-based observations.",
                image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800",
                tags: ["Forestry", "Conservation", "GIS"]
              },
              {
                title: "Water Quality Assessment",
                description: "Analysis of watershed health through comprehensive water quality monitoring and data visualization.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                tags: ["Water Quality", "Environmental Science", "Analytics"]
              },
              {
                title: "Climate Change Impact Study",
                description: "Assessment of climate change impacts on local ecosystems using historical data and climate models.",
                image: "https://images.unsplash.com/photo-1561481538-9989c8c8d2ad?auto=format&fit=crop&q=80&w=800",
                tags: ["Climate Science", "Research", "Modeling"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">{project.title}</h3>
                  <p className="text-emerald-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-6 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <Mail className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Email</h3>
                  <p className="text-emerald-600">contact@example.com</p>
                </div>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-6 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Phone</h3>
                  <p className="text-emerald-600">+1 (234) 567-890</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-lg">
                <MapPin className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Location</h3>
                  <p className="text-emerald-600">San Francisco, CA</p>
                </div>
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <ExternalLink className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-emerald-800">LinkedIn</h3>
                  <p className="text-emerald-600">View Profile</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;