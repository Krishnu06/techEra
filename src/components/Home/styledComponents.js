import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
`

export const CourseItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const Heading = styled.h1`
  color: #1e293b;

  font-weight: bold;
  font-size: 32px;
`

export const CoursesListContainer = styled.div`
  padding-left: 60px;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorImg = styled.img`
  margin-bottom: 15px;
  margin-top: 50px;
  width: 450px;
`

export const ErrorHeading = styled.h1`
  color: #475569;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: -10px;
`

export const ErrorInfo = styled.p`
  color: #64748b;
  font-size: 18px;
  font-weight: 400;
`

export const ErrorRetryButton = styled.button`
  background-color: #4656a1;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 10px 25px 10px 25px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
