import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4><a href={gitUrl} class="text-reset">{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
