import Education from "../Components/Education"

export const EducationSection = () => {
  return (
    <section id="education">
        <div className="container">
        <div class="row">
            <div class="col-xl-12 text-center mb-3">
                <h4>Education & Certifications</h4>
            </div>
            <Education
                name="Computer Engineering"
                uniName="AlQuds University"
                period="2017-2022"
                desc={'Al-Quds University is a prominent institution of higher education located in East Jerusalem. Founded in 1984, it has grown to become a significant center for academic learning and research in the Palestinian territories. The university offers a wide range of undergraduate and graduate programs across various fields, including humanities, sciences, engineering, and social sciences.'}
                imgLeft={true}
            />
        </div>
        </div>
    </section>
  )
}
