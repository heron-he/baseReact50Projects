import styled from "styled-components";

const Home = () => {
    const TestStyle = styled.div`
      background-color: red;
      color: white;
      font-size: 20px;
      border-radius: 5px;
      padding: 10px;
      width: 100px;
    `
    return (
        <div>
            <h1>React</h1>
            <p>React is a JavaScript library for building user interfaces.</p>
            <TestStyle>Test</TestStyle>
        </div>
    )
}

export default Home