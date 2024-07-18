'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Workshops() {
  return (
    <div className="w-full bg-lightgreen/10 pb-16 border-2">
      <div className="flex-1 container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 pt-28">Experience and Academic Opportunities</h1>
        </div>
        <div className="text-justify space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Once a year, the core team, the trainees, and the collaborators will get together for a multi-day networking and information exchange event consisting of three different components.
          </motion.p>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Workshops
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-2"
            >
              <Image
                src="/leaf.svg"
                alt="Workshops"
                width={20}
                height={20}
              />
              <p>
                The annual <strong>Data Systems meet Data Science (DSDS) Workshop</strong> connects academic and industrial experts who will present the latest research in this area. Students will present posters enabling them to network with senior participating.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-2"
            >
              <Image
                src="/leaf.svg"
                alt="Industry Workshop"
                width={20}
                height={20}
              />
              <p>
                An <strong>industry workshop</strong> will serve as a testbed for knowledge mobilization. It will have industry-targeted learning modules to present recent advances in sustainable data systems research to practitioners. Trainees will be significantly involved in the preparation.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-3"
              >
                Summer School
              </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start space-x-2"
            >
              <Image
                src="/leaf.svg"
                alt="Summer School"
                width={20}
                height={20}
              />
              <p>
                A <strong>summer school</strong> targeted at graduate students that will cover cross-layer and sustainability challenges for system and machine learning.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
