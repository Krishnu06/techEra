The goal of this coding exam is to quickly get you off the ground with **Fetching and Routing**.

### Refer to the images below:

**Success View**

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/tech-era-success-output.gif" alt="success view" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

<br/>

**Failure View**

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/tech-era-failure-output.gif" alt="failure view" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

<br/>

### Design Files

<details>

<summary>Click to view</summary>

- Home Route

  - [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Courses Success](https://assets.ccbp.in/frontend/content/react-js/tech-era-home-success-lg-output.png)
  - [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Courses Failure](https://assets.ccbp.in/frontend/content/react-js/tech-era-home-failure-lg-output.png)

- Course Item Details Route

  - [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Course Details Success](https://assets.ccbp.in/frontend/content/react-js/tech-era-course-details-success-lg-output.png)
  - [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Course Details Failure](https://assets.ccbp.in/frontend/content/react-js/tech-era-course-details-failure-lg-output.png)

- Not Found Route

  - [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/tech-era-page-not-found-lg-output.png)

</details>

### Set Up Instructions

<details>

<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Completion Instructions

<details>

<summary>Functionality to be added</summary>

<br/>

The app must have the following functionalities

- When the app is opened initially, Home Route should be displayed

- **Home Route**
  - When the Home Route is opened,
    - An HTTP GET request should be made to the **coursesApiUrl**
      - The _loader_ should be displayed while the HTTP request is fetching the data
      - If the HTTP GET request made is successful, then the list of courses received in response should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/tech-era-home-failure-lg-output.png) should be displayed
        - When the **Retry** button is clicked, then an HTTP GET request should be made to **coursesApiUrl**
  - When a course is clicked, then the page should be navigated to the Course Item Details Route
- **Course Item Details Route**
  - When the Course Item Details Route is opened,
    - An HTTP GET request should be made to the **courseDetailsApiUrl** with the `id` as path parameter
      - The _loader_ should be displayed while the HTTP request is fetching the data
      - If the HTTP GET request made is successful, then the course details received in response should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/tech-era-course-details-failure-lg-output.png) should be displayed
        - When the **Retry** button is clicked, then an HTTP GET request should be made to **courseDetailsApiUrl**
- **Not Found Route**
  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route
- When the **website logo** image is clicked, then the page should be navigated to the Home Route

</details>

<details>

<summary>API Requests & Responses</summary>

<br/>

**coursesApiUrl**

#### API: `https://apis.ccbp.in/te/courses`

#### Method: `GET`

#### Description:

Returns a response containing the list of all courses

#### Response:

```json
{
  "courses": [
      {
        "id": "736d1108-d98b-482f-bfd6-234498c3571f",
        "name": "HTML",
        "logo_url": "https://assets.ccbp.in/frontend/react-js/tech-era/html-logo-img.png"
      },
       ...
  ],
  "total": 16
}
```

**courseDetailsApiUrl**

#### API: `https://apis.ccbp.in/te/courses/:id`

#### Method: `GET`

#### Description:

Returns a response containing details of the course

#### Response:

```json
{
  "course_details": {
    "id": "736d1108-d98b-482f-bfd6-234498c3571f",
    "name": "HTML",
    "image_url": "https://assets.ccbp.in/frontend/react-js/tech-era/html-img.png",
    "description": "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or local storage and render the documents into multimedia web pages."
  }
}
```

</details>

### Important Note

<details>

<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Home Route should consist of `/` in the URL path
- Course Item Details Route should consist of `/courses/:id` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in the `index.js` file
- Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as `loader` to it
- Each course logo image in the Home Route should have the alt as the value of the key "name" from each course object in the courses list
- Each course image in the Course Item Details Route should have the alt as the value of the key "name" in the course details object
- Use `styled-components` for styling elements

</details>

### Resources

<details>

<summary>Image URLs</summary>

- https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png alt should be **website logo**
- https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png alt should be **failure view**
- https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png alt should be **not found**

</details>

<details>

<summary>Colors</summary>

<br/>

<div style="background-color:#f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color:#1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color:#475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color:#ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color:#4656a1; width: 150px; padding: 10px; color: white">Hex: #4656a1</div>
<div style="background-color:#64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color:#e8e8e8; width: 150px; padding: 10px; color: black">Hex: #e8e8e8</div>

</details>

<details>

<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
