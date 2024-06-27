import Sidebar from "@/app/sidebar";

export default function Skills() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 container mx-auto p-8">
                    <h1 className="text-4xl font-bold text-center mb-6">Advanced Skills Training</h1>
                    <div className="text-justify px-11 space-y-6">
                        <p>
                            Throughout their studies, students will get various opportunities for individualized training and support.
                        </p>
                        <p>
                            We will encourage them to do <strong>industrial internships</strong> that will help them align their research with industry relevance. 
                        </p>
                        <p>
                            They will attend the <strong>universities’ teaching assistant training programs</strong> and the <strong>university’s professional skills training programs</strong> in order to become the teachers and trainers of tomorrow. 
                        </p>
                        <p>
                            They will be encouraged to <strong>visit</strong> other labs and have <strong>co-supervision</strong> in order to provide them with different expertise during their research. And finally, other students will have an additional <strong>mentor</strong> ensuring equal opportunity no matter what backgrounds the students have. 
                        </p>
                    </div>
            </div>
        </div>
    )
}