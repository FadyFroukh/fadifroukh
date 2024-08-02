import Skill from "../Components/Skill"

const SkillsSection = () => {

    const skills = [
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
        {
            name:"HTML",
            url:"html.png"
        },
    ]

  return (
    <section id="skills">
        <div className="container">
            <div className="row text-center">
                <div className="col-xl-12 mb-4">
                    <h3>
                        Have a Look at my Skills
                    </h3>
                    <p className="text-muted">
                        I got a few
                    </p>
                </div>
                {
                    skills.map(skill=>{
                        return <Skill name={skill.name} url={skill.url}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default SkillsSection