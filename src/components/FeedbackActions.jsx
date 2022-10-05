import PropTypes from 'prop-types';
import { Button } from './FeedbackStyled';

export default function FeedbackActions({ handleButtonClick }) {
    return (
        <div>
          <Button type="button" name="good" onClick={handleButtonClick}>Good</Button>
          <Button type="button" name="neutral" onClick={handleButtonClick}>Neutral</Button>
          <Button type="button" name="bad" onClick={handleButtonClick}>Bad</Button>
        </div>
    )
}

FeedbackActions.propTypes = {
    handleButtonClick: PropTypes.func.isRequired,
}