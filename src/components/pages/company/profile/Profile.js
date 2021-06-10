import { number, shape, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapPin,
  faPhone,
  faLink,
  faIndustry,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Description } from '../description';
import { ProfileContent } from './styles';

export function Profile({ content }) {
  const { t } = useTranslation();
  const {
    address,
    address2,
    city,
    state,
    zip,
    phone,
    website,
    industry,
    description,
    employees,
  } = content || {};
  const street = [address, address2].join(' ');
  const place = [city, state].join(',');

  return (
    <ProfileContent>
      <h3>{t('company.profile')}</h3>
      <div className="content">
        <p className="content__item">
          <small>
            <FontAwesomeIcon icon={faMapPin} />
            {t('company.address')}
          </small>
          <span>{street}</span>
          <span>{`${place} ${zip}`}</span>
        </p>
        <p className="content__item">
          <small>
            <FontAwesomeIcon icon={faPhone} />
            {t('company.phone')}
          </small>
          <span>{phone}</span>
        </p>
      </div>
      <div className="content">
        <p className="content__item">
          <small>
            <FontAwesomeIcon icon={faLink} />
            {t('company.website')}
          </small>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </p>
        <p className="content__item">
          <small>
            <FontAwesomeIcon icon={faIndustry} />
            {t('company.industry')}
          </small>
          <span>{industry}</span>
        </p>
      </div>
      <div className="content">
        <p className="content__item">
          <small>
            <FontAwesomeIcon icon={faUser} />
            {t('company.employees')}
          </small>
          <span>{numeral(employees).format('0.0a')}</span>
        </p>
      </div>
      {description && <Description text={description} />}
    </ProfileContent>
  );
}

Profile.propTypes = {
  content: shape({
    industry: string,
    website: string,
    description: string,
    securityName: string,
    employees: number,
    address: string,
    address2: string,
    state: string,
    city: string,
    zip: string,
    phone: string,
  }).isRequired,
};

export default Profile;
