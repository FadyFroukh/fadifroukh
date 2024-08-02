
const Skill = ({name,url}) => {
  return (
    <div className="col-xl-2 mb-2">
        <img src={`images/${url}`} class="mb-4" alt="Skill"/>
        <div>
            <p>
                <strong>
                    {name}
                </strong>
            </p>
        </div>
    </div>
  )
}

export default Skill