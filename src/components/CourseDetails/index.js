import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseDetailsItem from '../CourseDetailsItem'
import Header from '../Header'

import {
  CourseDetailsListContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorInfo,
  ErrorRetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseDetails extends Component {
  state = {
    CourseDetailsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  onClickRetry = () => {
    this.getCourseDetails()
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

  getCourseDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = [fetchedData.course_details].map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({
        CourseDetailsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderCourseDetailsView = () => {
    const {CourseDetailsList} = this.state

    return (
      <CourseDetailsListContainer>
        {CourseDetailsList.map(each => (
          <CourseDetailsItem key={each.id} courseItemDetails={each} />
        ))}
      </CourseDetailsListContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderCourseDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseDetailsView()
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
      <>
        <Header />
        {this.renderCourseDetails()}
      </>
    )
  }
}

export default CourseDetails
