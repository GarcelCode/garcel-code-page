import { skillsList, learningList } from "../Data/SkillsList";

export default function Knowledge () {
    
return (
    <article className="animate-fadeIn opacity-0">
        <p className="text-gc-text text-center my-3">I have experience using</p>
        <>
            <ul className="grid grid-cols-auto gap-5">
                {skillsList.map((el)=><li key={el.id} className="flex justify-center text-sky-300 text-5xl animate-appear">{el.icon}</li>)}
            </ul>
        </>
        <p className="text-gc-text text-center my-3">Learning</p>
        <>
            <ul className="grid grid-cols-auto gap-5">
                {learningList.map((el)=><li key={el.id} className="flex justify-center text-sky-300 text-5xl animate-appear">{el.icon}</li>)}
            </ul>
        </>
    </article>
)
}