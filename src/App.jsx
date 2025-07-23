import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
        <header className="bg-white dark:bg-gray-800 shadow-md p-6">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Koteswara Rao Varikuti</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                title="Toggle Dark Mode"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </button>
              <a
                href="http://www.linkedin.com/in/chinna-koteswararao-varikuti-4a4282320"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-700 text-2xl" />
              </a>
              <a href="https://github.com/vkoti6159" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black dark:text-white text-2xl" />
              </a>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 dark:bg-gray-700 py-2 shadow-sm">
          <div className="max-w-5xl mx-auto flex justify-center gap-6 text-sm md:text-base">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#resume" className="hover:text-blue-500">Resume</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto p-6 space-y-12">
          <section id="about">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p>
              Motivated Full Stack Developer and AI/ML enthusiast with a strong foundation in Python,
              web technologies, and cloud platforms. Currently undergoing intensive MERN stack training
              and equipped with hands-on experience through virtual internships and real-world projects.
            </p>
          </section>

          <section id="skills">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc pl-5">
              <li>Python, Java, JavaScript</li>
              <li>HTML, CSS, ReactJS</li>
              <li>NodeJS, ExpressJS, MongoDB</li>
              <li>TensorFlow, Keras, Scikit-learn</li>
              <li>Pandas, NumPy, Seaborn</li>
              <li>Git, Docker, AWS</li>
            </ul>
          </section>

          <section id="projects">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Spam Email Classifier</h3>
                <p>Used Logistic Regression to classify emails with 90% accuracy.</p>
                <a
                  href="https://github.com/vkoti6159/python-ML/blob/main/Email%20Classification%20spam%20or%20not%20using%20logistic%20regression.ipynb"
                  className="text-blue-600 underline"
                >
                  View on GitHub
                </a>
              </div>
              <div>
                <h3 className="font-bold">House Price Prediction</h3>
                <p>Achieved R² score of 0.88 using Linear Regression.</p>
                <a
                  href="https://github.com/vkoti6159/python-ML/blob/main/house%20price%20predict%20linear%20regression%20.ipynb"
                  className="text-blue-600 underline"
                >
                  View on GitHub
                </a>
              </div>
              <div>
                <h3 className="font-bold">Movie Review Sentiment Classifier</h3>
                <p>Used Neural Networks on IMDb dataset to reach 92% accuracy.</p>
                <a
                  href="https://github.com/vkoti6159/python-ML/blob/main/nueral%20network%20for%20classifying%20movie%20(binary)%20use%20imdb)-checkpoint.ipynb"
                  className="text-blue-600 underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </section>

          <section id="resume">
            <h2 className="text-xl font-semibold mb-2">Resume</h2>
            <a
              href="/Koteswara_Rao_Resume_updated.docx"
              download
              className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </section>

          <section id="contact">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Email: <a href="mailto:22ht1a6159@gmail.com" className="text-blue-600">22ht1a6159@gmail.com</a></p>
          </section>
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 mt-12">
          <p>© 2025 Koteswara Rao. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
