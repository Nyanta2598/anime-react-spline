import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import nichi1 from './assets/nichi1.png';
import nichi2 from './assets/nichi2.png';
import nichi3 from './assets/nichi3.png';

export default function App() {
  return (
    <Wrapper>
      <Spline className='spline' scene="https://prod.spline.design/sw6IJzwBFV0tukJy/scene.splinecode" />
      <Content>
        <h1 className='hello font-link'>Mio Naganohara</h1>
        <p>bright and cheerful girl sporting light blue hair<br></br> 
        and pigtails held by two small wooden cubes. <br></br>
        She has a crush on Koujirou Sasahara.</p>
        <div className='row'>
          <div className='column'>
            <img className='pic' src={nichi1} alt="nichi1" />
          </div>
          <div className='column'>
            <img className='pic' src={nichi2} alt="nichi2" />
          </div>
          <div className='column'>
            <img className='pic' src={nichi3} alt="nichi3" />
          </div>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  color: #7CB9E8;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  .spline{
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  margin: 0;
  top: 10%;
  left: 7%;
  .column {
    
    width: 33.33%;
    padding: 5px;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  .pic{
    width: 25%;
    height: 25%;
  }
`