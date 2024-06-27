import Sidebar from "../sidebar";

export default function About() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center mb-6">Introduction</h1>
                <div className="text-justify px-11 space-y-6">
                    <p>
                        As Artificial Intelligence and Machine Learning (ML) has begun to influence Canada’s industrial, social, and cultural landscape, ML tasks require increasingly large and complex compute and software infrastructure with significant impact on the environmental footprint. As such, future data engineers need to think green and holistic to develop the energy-efficient data analytics platforms of tomorrow.
                    </p>
                    <p>
                        SustainSys, the CREATE program on Sustainable Data Systems for Data Science, will train a new generation of highly-skilled computer scientists with the objectives that:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>
                            The trainees will gain the holistic domain knowledge to build and maintain the full-stack platforms required by complex data science.
                        </li>
                        <li>
                            The trainees will learn to think green and are able to embed environmental sustainability concepts in the entire development and deployment life-cycle of data science.
                        </li>
                        <li>
                            The trainees will become the trainers and mentors of tomorrow so as to drive knowledge mobilization within the industry.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
