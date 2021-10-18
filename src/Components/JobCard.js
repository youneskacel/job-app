import './JobCard.css'


const JobCard = (props) => {
    return (
        <div className={`container${props.job.featured ? "_featured" : ""}`}>

            <div className="leftPart">
            <img src={props.job.logo} alt="img" />
            <div className="descriptions">

            <span className="compName">{props.job.company}</span>

            <h3>{props.job.position}</h3>
            <div className="newFeat">
            {props.job.new && <span className="new">NEW</span>}
            {props.job.featured && <span className="featured">Featured</span>}
            </div>

            <div className="postLoc">
                <span>{props.job.postedAt}</span>
                <span>{props.job.contract}</span>
                <span>{props.job.location}</span>
            </div>
            </div>
                </div>            

            <div className="details">
                <div className="roleLvl">
                    <span className="role">{props.job.role}</span>
                    <span className="level">{props.job.level}</span>
                </div>

                <div className="skills">
                <div className="languages">
                    {props.job.languages.map((lang , index) => {
                       return <span key={index}>{lang}</span>
                    })}
                </div>

                <div className="tools">
                    {props.job.tools.map((tool , index) => {
                      return  <span key={index}>{tool}</span>
                    })}
                </div>
                </div>
            </div>

        </div>
      
      );
};

export default JobCard;
