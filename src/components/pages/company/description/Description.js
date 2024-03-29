import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const MAX_DESCRIPTION_CHARS = 300;

const DescriptionWrapper = styled.p`
  text-align: left;
  & .toggle-info {
    display: inline;
    color: ${(props) => props.theme.palette.info};
    cursor: pointer;
    font-weight: 600;
  }
`;

export function Description({ text }) {
  const { t } = useTranslation();
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    setShowFullDescription(text && text.length < MAX_DESCRIPTION_CHARS);
  }, [text]);

  return (
    <DescriptionWrapper>
      <small>
        <FontAwesomeIcon icon={faBookOpen} />
        {t('company.description')}
      </small>
      {showFullDescription ? text : text.slice(0, 300)}
      {text.length > MAX_DESCRIPTION_CHARS && (
        <span
          onClick={() => setShowFullDescription((prev) => !prev)}
          className="toggle-info"
        >
          {showFullDescription ? '...Show less' : '...Show more'}
        </span>
      )}
    </DescriptionWrapper>
  );
}

Description.propTypes = {
  text: string,
};

Description.defaultProps = {
  text: '',
};

export default Description;
