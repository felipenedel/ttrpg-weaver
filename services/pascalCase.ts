import _ from "lodash";

export function toCamelCaseDeep(obj: any): any {
  if (_.isArray(obj)) {
    return obj.map(toCamelCaseDeep);
  } else if (_.isObject(obj) && obj !== null) {
    return _.mapValues(_.mapKeys(obj, (_v, k) => _.camelCase(k)), toCamelCaseDeep);
  }
  return obj;
}
