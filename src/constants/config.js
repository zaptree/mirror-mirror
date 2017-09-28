const appConfig = require('../../mirror-mirror.config');
const Joi = require('joi-browser');
const { normalizeHierarchy: flattenHierarchy } = require('object-decomposer');

let config = null;

function validateConfig() {
  const componentSchema = Joi.object({
    name: Joi.string().required(),
    options: Joi.object(),
    components: Joi.array(),
  }).required();

  const panelSchema = Joi.object({
    name: Joi.string().required(),
    components: Joi.array().items(componentSchema),
  }).required();

  const configSchema = Joi.object({
    defaultPanel: Joi.number(),
    panels: Joi.array()
      .items(panelSchema)
      .required(),
  }).required();

  const { error, value } = Joi.validate(appConfig, configSchema);

  if (error) {
    // TODO: ADD LOGGING TO REACT FOR DEBUGGING BY END USER
    console.log('Invalid configuration file:', error, value); // eslint-disable-line
    throw new Error(`${error.message} ${JSON.stringify(value)}`);
  }

  // FLATTEN THE COMPONENT LIST AND VALIDATE THE RECURSIVE SCHEMA OF THE COMPONENTS
  const flatComponentList = [].concat(
    ...appConfig.panels.map(panel => flattenHierarchy(panel, 'components')),
  );
  flatComponentList.forEach((component) => {
    const { error: e, value: v } = Joi.validate(component, componentSchema);

    if (e) {
      // TODO: ADD LOGGING TO REACT FOR DEBUGGING BY END USER
      console.log('Invalid configuration file:', e, v); // eslint-disable-line
      throw new Error(`${e.message} ${JSON.stringify(v)}`);
    }
  });

  // IF IT'S MADE IT THIS FAR THE CONFIG FILE IS VALID SO STORE IT AND RETURN IT
  config = appConfig;
  return config;
}

module.exports = () => {
  if (config) {
    return config;
  }

  return validateConfig();
};
