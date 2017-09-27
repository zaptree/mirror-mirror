import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ComponentWrapper from './ComponentWrapper';

export default function Panel({ components, left, right }) {
  return (
    <div
      className={classNames('panel-container', {
        offLeft: left,
        offRight: right,
      })}
    >
      {components.map(({ name, ...rest }, index) => (
        <ComponentWrapper
          key={index}
          Component={require(`../components/${name}`).default} // eslint-disable-line
          {...rest}
        />
      ))}
    </div>
  );
}

Panel.propTypes = {
  components: PropTypes.arrayOf(PropTypes.any).isRequired,
  left: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
};
