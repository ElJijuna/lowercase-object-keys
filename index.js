module.exports = object => Object.keys(object).map((key) => ({ [key.toLowerCase()]:  object[key] })).reduce((prev, next) => ({ ...prev, ...next }), {});
