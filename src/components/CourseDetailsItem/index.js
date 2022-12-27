import {
  CourseDetailsCard,
  CourseDetailsImage,
  CourseDetailsTitle,
  CourseDetailsInfo,
  CourseInfoContainer,
  CourseDetailsContainer,
} from './styledComponents'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <CourseDetailsCard>
      <CourseDetailsContainer>
        <CourseDetailsImage src={imageUrl} alt={name} />
        <CourseInfoContainer>
          <CourseDetailsTitle>{name}</CourseDetailsTitle>
          <CourseDetailsInfo>{description}</CourseDetailsInfo>
        </CourseInfoContainer>
      </CourseDetailsContainer>
    </CourseDetailsCard>
  )
}

export default CourseDetailsItem
