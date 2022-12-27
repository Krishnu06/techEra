import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CourseItem'
import Header from '../Header'

import {
  BgContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorInfo,
  ErrorRetryButton,
  CourseItemsList,
  CoursesListContainer,
  Heading,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courseList: [],
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getCourses()
  }

  renderFailureView = () => (
    <ErrorContainer>
      <ErrorImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <ErrorHeading>Oops! Something Went Wrong</ErrorHeading>
      <ErrorInfo>
        We cannot seem to find the page you are looking for.
      </ErrorInfo>
      <ErrorRetryButton
        type="button"
        className="retry-button"
        onClick={this.onClickRetry}
      >
        Retry
      </ErrorRetryButton>
    </ErrorContainer>
  )

  renderCoursesList = () => {
    const {courseList} = this.state

    return (
      <CoursesListContainer>
        <Heading>Courses</Heading>
        <CourseItemsList>
          {courseList.map(each => (
            <CourseItem key={each.id} courseItemDetails={each} />
          ))}
        </CourseItemsList>
      </CoursesListContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderCourses = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <Header />
        {this.renderCourses()}
      </BgContainer>
    )
  }
}

export default Home
