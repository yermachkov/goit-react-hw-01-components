import PropTypes from 'prop-types';
import { Section, Title, Stats, StatsItem, Label, Percentage } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
};

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && (<Title>{title}</Title>)}

      <Stats>
        {stats.map(({id, label, percentage}) => {
          return (
            <StatsItem key={id} style={{backgroundColor: getRandomHexColor()}}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatsItem>
        ) })}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
};
