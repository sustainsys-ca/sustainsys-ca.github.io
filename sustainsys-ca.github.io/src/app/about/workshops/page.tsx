import Sidebar from "@/app/sidebar";

export default function Workshops() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 container mx-auto p-8">
                    <h1 className="text-4xl font-bold text-center mb-6">Workshops and Summer School</h1>
                    <div className="text-justify px-11 space-y-6">
                        <p>
                        Once a year, the core team, the trainees and the collaborators will get together for a multi-day networking and information exchange event  consisting of three different components. 
                        </p>
                        <p>
                            The annual <strong>Data Systems meet Data Science (DSDS) Workshop</strong> connects academic and industrial experts who will present the latest research in this area. Students will present posters enabling them to network with senior participating. 
                        </p>
                        <p>
                            An <strong>industry workshop</strong> will serve as testbed for knowledge mobilization. It will have industry-targeted learning modules to present recent advances in sustainable data systems research to practitioners. Trainees will be significantly involved in the preparation. 
                        </p>
                        <p>
                            A <strong>summer school</strong> targeted at graduate students that will cover cross-layer and sustainability challenges for system and machine learning. 
                        </p>
                    </div>
            </div>
        </div>
    )
}