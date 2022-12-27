import styled from 'styled-components'

export const CourseDetailsListContainer = styled.ul``

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
