import { number, shape, string } from 'prop-types';
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
      <h3>Profile</h3>
      <div className="content">
        <p>
          <small>
            <FontAwesomeIcon icon={faMapPin} />
            Address
          </small>
          <span>{street}</span>
          <span>{`${place} ${zip}`}</span>
        </p>
        <p>
          <small>
            <FontAwesomeIcon icon={faPhone} />
            Phone
          </small>
          <span>{phone}</span>
        </p>
      </div>
      <div className="content">
        <p>
          <small>
            <FontAwesomeIcon icon={faLink} />
            Website
          </small>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </p>
        <p>
          <small>
            <FontAwesomeIcon icon={faIndustry} />
            Industry
          </small>
          <span>{industry}</span>
        </p>
      </div>
      <div className="content">
        <p>
          <small>
            <FontAwesomeIcon icon={faUser} />
            Employees
          </small>
          <span>{numeral(employees).format('0.0a')}</span>
        </p>
      </div>
      <Description text={description} />
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
