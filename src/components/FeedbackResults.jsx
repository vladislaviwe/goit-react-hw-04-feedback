import PropTypes from 'prop-types';
import Notification from './Notification';
import { ResultsList } from './FeedbackStyled';

export default function FeedbackResults({ good, neutral, bad, total, positiveFeedback }) {
    if (!total) {
       return (
        <Notification message="There is no feedback"></Notification>
       ) 
    }
    return (
        <ResultsList>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
                <p>Positive feedback: {positiveFeedback}%</p>
            </li>
        </ResultsList>
    )
}

FeedbackResults.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positiveFeedback: PropTypes.number.isRequired,
}