import Sidebar from "@/app/sidebar"

export default function CourseWork() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 container mx-auto p-8">
                    <h1 className="text-4xl font-bold text-center mb-6">Course Work</h1>
                    <div className="text-justify px-11 space-y-6">
                        <p>
                        The program offers a unique set of course work to achieve all our objectives.
                        </p>
                        <p>
                            A <strong>sustainable data science course</strong>, co-taught across the different universities, where the latest research developments in data science platforms and sustainable data science are discussed by experts and the students themselves
                        </p>
                        <p>
                            A <strong>sustainable seminar series</strong> where computer science and sustainability experts introduce and cover topics that are important for green data scientists such as clean tech, sustainable materials, sustainable computing, etc. 
                        </p>
                        <p>
                            <strong>Sustainability teaching modules</strong>  within core CS systems courses in order to expose such topics to students at large.
                        </p>
                        <p>
                            A wide range of <strong>systems seminar courses</strong> to CREATE students so that they get exposed to the different layers of the data science system stack  while at the same time practice their communication and team work skills. 
                        </p>
                    </div>
            </div>
        </div>
    )
}