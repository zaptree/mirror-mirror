import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ComponentWrapper({ Component, components, placement, options }) {
  return (
    <div className={classNames('componentWrapper', { [placement]: placement !== '' })}>
      <Component {...options}>
        {components &&
          Array.isArray(components) &&
          components.map(({ name, ...rest }, index) => (
            <ComponentWrapper
              key={index}
              Component={require(`../components/${name}`).default} // eslint-disable-line
              {...rest}
            />
          ))}
      </Component>
    </div>
  );
}

ComponentWrapper.defaultProps = {
  components: [],
  placement: 'top left',
  options: [],
};

ComponentWrapper.propTypes = {
  Component: PropTypes.func.isRequired,
  components: PropTypes.arrayOf(PropTypes.object),
  placement: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
};
