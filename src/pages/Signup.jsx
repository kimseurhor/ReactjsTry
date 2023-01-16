import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import Backgroupimg from '../components/Backgroupimg';
import Headerr from '../components/Headerr';
import tv from '../assets/tv.png'
import ph from '../assets/3.jpg'
import moon from '../assets/4.png'
export default function Signup(props) {
  const navigate = useNavigate();
  return <Container>
  <Backgroupimg />
  <div className='content'>
  <Headerr login/>
  <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className='form'>
            <input type="email" placeholder='Email Adress' name='email' />

            <button onClick={() => navigate(props.homepage?"/" : "netflix")}>
            {props.homepage?"Sign up" : "Get Started"}</button>
          </div>

    </div>
    </div>
    <section class="style-cards">
    <div class="card-1">
    <div class="desc-1">
        <h1>Enjoy on your TV.</h1>
        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
    </div>
    <img src={tv} alt="Netflix TV"/>
    </div>
    <div class="card-2">
            <img src={ph} alt="Netflix Mobile"/>
            <div class="desc-2">
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
    </div>
    <div class="card-3">
            <div class="desc-3">
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div></div>
            
    <div  class="card-0">
      <img src={moon} alt="Device-Pile-In"/>
      <div class="desc-0">
        <h1>Create profiles for kids.</h1>
        <h3>Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
      </div>
    </div>
    
  </section>  
  <section class="lastsec">
  <div class="faq">
  <h1>Frequently Asked Questions</h1>
  <ul class="questions">
    <li>What is Netflix?</li>
    <li>How much does Netflix cost?</li>
    <li>Where can I watch?</li>
    <li>How do I cancel?</li>
    <li>What can I watch on Netflix?</li>
    <li>Is Netflix good for kids?</li>
  </ul>
  <p>Ready to watch? Enter your email to create or restart your membership.</p>
  <div class="input">
  <div className='form'>
  <input type="email" placeholder='Email Adress' name='email' />

  <button onClick={() => navigate(props.homepage?"/" : "netflix")}>
  {props.homepage?"Sign up" : "Get Started"}</button>
</div>
</div>
  </div>
  </section>
  </Container>;
  
}

const Container = styled.div`
.line{ border-bottom: 8px rgb(69, 69, 69) solid;
    padding: 50px;
}
.card-0 {border-top: 8px rgb(69, 69, 69) solid;
    padding: 50px;
    border-bottom: 8px rgb(69, 69, 69) solid;
  } 
.card-1,
.card-2,
.card-3{
    border-top: 8px rgb(69, 69, 69) solid;
    padding: 50px;
}

.card-0{
    position: relative;
    display: inline-grid;
    grid-template-columns: 40% 50%;
    text-align: left;
    align-items: center;
    padding: 25px 45px 50px;
}

.desc-0{
    padding-left: 100px;
}

.card-1{
    position: relative;
    display: inline-grid;
    grid-template-columns: 50% 40%;
    text-align: left;
    align-items: center;
    padding: 25px 45px 50px;
}

.desc-1{
    padding-left: 80px;
}

.style-cards h1{
    font-size: 2.5rem;
    padding: 1rem;
    padding-left: 0;
}

.style-cards h3{
    font-size: 1.6rem;
    line-height: 1.8rem;
}

.card-1 video{
    position: relative;
    width: 100%;
    height: 54%;
    grid-column: 2/2;
    grid-row: 1/2;
    z-index: -1;
}

.card-1 img{
    grid-column: 2/2;
    grid-row: 1/2;
}

.card-2{
    position: relative;
    display: inline-grid;
    grid-template-columns: 40% 50%;
    text-align: left;
    align-items: center;
    padding: 25px 45px 50px;
}

.desc-2{
    padding-left: 100px;
}

.card-3{
    position: relative;
    display: inline-grid;
    grid-template-columns: 50% 40%;
    text-align: left;
    align-items: center;
    padding: 25px 45px 50px;
}

.desc-3{
    padding-left: 80px;
    padding-right: 20px;
}

.faq{
    text-align: center;
}

.faq h1{
    padding-bottom: 40px;
    font-size: 3rem;
}

.questions{
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    align-items: center;
}

.questions li{
    padding: 20px 30px;
    margin: 5px;
    font-size: 1.6rem;
    background-color: #303030;
    color: white;
    text-align: left;
    width: 50%;
}

.faq p{
    padding-top: 60px;
    font-size: 1.2rem;
    font-weight: 200;
}

.input{
    display: inline-grid;
    align-items: center;
    grid-template-columns: 50% 40%;
}

.input input{
    width: 600px;
    height: 3rem;
}

.input button{
    height: 3.25rem;
    width: 320px;
    left: 20px;
    text-align: center;
    background-color: var(--primary-color);
    font-size: 1.5rem;
    padding: 15px 32px;
    border: none;
    border-radius: 2px;
    color: white;
}
.form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }

  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 1.5rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  }`;