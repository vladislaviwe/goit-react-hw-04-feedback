import Section from "./Section";
import FeedbackActions from "./FeedbackActions";
import FeedbackResults from "./FeedbackResults";
import { Container } from './FeedbackStyled';
import { useState } from "react";



export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = (e) => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood((prev) => prev + 1)
        return;
      case 'neutral':
        setNeutral((prev) => prev + 1)
        return;
      case 'bad':
        setBad((prev) => prev + 1)
        return;  
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;

    if(!total) {
      return 0;
    }
    
    return Number(result.toFixed(2));
  }

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <Container>
        <Section title="Please leave feedback">
          <FeedbackActions handleButtonClick={handleButtonClick}/>
        </Section>

        <Section title="Statistics">
          <FeedbackResults good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positiveFeedback}/>
        </Section>
    </Container>
  )
}


// class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleButtonClick = (e) => {
//     const name = e.target.name;
    
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }))
//   }

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;

//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const result = (good / total) * 100;

//     if(!total) {
//       return 0;
//     }
    
//     return Number(result.toFixed(2));
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { handleButtonClick } = this;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackActions handleButtonClick={handleButtonClick}/>
//         </Section>

//         <Section title="Statistics">
//           <FeedbackResults good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positiveFeedback}/>
//         </Section>
//       </Container>
//     );
//   }
// }


