import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentWrapper({ Component, components, style, options }) {
  return (
    <div className={style}>
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
  style: undefined,
  options: [],
};

ComponentWrapper.propTypes = {
  Component: PropTypes.func.isRequired,
  components: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
};
