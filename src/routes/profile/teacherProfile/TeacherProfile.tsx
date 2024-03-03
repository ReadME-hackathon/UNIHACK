import AboutTeacher from "@/components/AboutTeacher/AboutTeacher";

const TeacherProfile = () => {
    return(
        <div className="mx-auto flex h-[90vh] justify-center">
        <div className="mt-10 flex h-4/5 w-6/12 flex-col justify-center gap-10">
                <div className="flex-col flex gap-10">
                    <h1 className="text-6xl font-bold">Profile</h1>
                    <div className="h-24 w-24 rounded-full bg-gray-300"></div>
                </div>
                <AboutTeacher color={"bg-orange-500"}/>
            </div>
        </div>
    )
} 

export default TeacherProfile


