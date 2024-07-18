import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="flex-1 container mx-auto p-8 space-y-16">
      <p className="leading-relaxed">
        As Artificial Intelligence and Machine Learning (ML) has begun to influence Canada’s industrial, social, and cultural landscape, ML tasks require increasingly large and complex compute and software infrastructure with significant impact on the environmental footprint. As such, future data engineers need to think green and holistic to develop the energy-efficient data analytics platforms of tomorrow.
        SustainSys, the CREATE program on Sustainable Data Systems for Data Science will train a new generation of highly-skilled computer scientists with the following objectives:
      </p>
      <div className="objectives flex justify-between space-x-8">
        <div className="space-y-3">
          <Image
            src="/book.svg"
            width={35}
            height={35}
            alt="book"
          />
          <h3 className="font-bold text-lg">Domain Knowledge</h3>
          <p className="text-sm leading-relaxed">
            The trainees will gain the holistic domain knowledge to build and maintain the full-stack platforms required by complex data science.
          </p>
        </div>
        <div className="space-y-3">
          <Image
            src="/lightbulb.svg"
            width={35}
            height={35}
            alt="lightbulb"
          />
          <h3 className="font-bold text-lg">Sustainable Development</h3>
          <p className="text-sm leading-relaxed">
            The trainees will learn to think green and are able to embed environmental sustainability concepts in the entire development and deployment life-cycle of data science.
          </p>
        </div>
        <div className="space-y-3">
          <Image
            src="/graduate.svg"
            width={35}
            height={35}
            alt="graduate"
          />
          <h3 className="font-bold text-lg">Mentorship</h3>
          <p className="text-sm leading-relaxed">
            The trainees will become the trainers and mentors of tomorrow so as to drive knowledge mobilization within the industry.
          </p>
        </div>
      </div>
    </div>
  );
}
