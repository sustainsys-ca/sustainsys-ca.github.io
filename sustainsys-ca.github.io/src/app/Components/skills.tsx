'use client';
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="w-full bg-lemonchiffon/10 pb-40 border-2">
      <div className="flex-1 container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 pt-28">Advanced Skills</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-black p-6 rounded-lg shadow-lg"
          >
            <p>Throughout their studies, students will get various opportunities for individualized training and support.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-black p-6 rounded-lg shadow-lg"
          >
            <p>We will encourage them to do <strong>industrial internships</strong> that will help them align their research with industry relevance.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-black p-6 rounded-lg shadow-lg"
          >
            <p>They will attend the <strong>universities’ teaching assistant training programs</strong> and the <strong>university’s professional skills training programs</strong> in order to become the teachers and trainers of tomorrow.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-black p-6 rounded-lg shadow-lg"
          >
            <p>They will be encouraged to <strong>visit</strong> other labs and have <strong>co-supervision</strong> in order to provide them with different expertise during their research. And finally, other students will have an additional <strong>mentor</strong> ensuring equal opportunity no matter what backgrounds the students have.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
