import PropTypes from 'prop-types';
import { StatList, StatListElement, StatsSection } from './Statistics.styled';
import { getRandomColor } from 'constants/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <h2 className="title">{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListElement key={id} color={getRandomColor()}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatListElement>
        ))}
      </StatList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
