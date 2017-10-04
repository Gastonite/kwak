'use strict';
import LodashIsEqual from 'lodash.isequal';
import LodashIsPlainObject from 'lodash.isplainobject';

export const assert = (condition, message) => {

  if (condition)
    return condition;

  throw new Error(message);
};

export const isDeeplyEqual = LodashIsEqual;
export const isEqualTo = (value, input) => input === value;
export const isTrue = input => isEqualTo(true, input);
export const isUndefined = input => isEqualTo(void 0, input);
export const isNull = input => isEqualTo(null, input);
export const isInstanceOf = (type, input) => input instanceof type;
export const isArray =  input => isInstanceOf(Array, input);
export const isOfType =  (type, input) => isEqualTo(type, typeof input);
export const isObject = input => isOfType('object', input);
export const isPlainObject = LodashIsPlainObject;
export const isEmpty = input => input.length < 1;
export const isBoolean = input => isOfType('boolean', input);
export const isString = input => {

  return isOfType('string', input);
};
export const isFunction = input => isOfType('function', input) && input;
export const isNumber = input => isOfType('number', input);
export const isInteger = input => Number.isInteger(input);
export const isComponent = input => isObject(input) && input.isPwetComponent === true;
export const isHTMLElement = input => isInstanceOf(HTMLElement, input);
export const isElement = input => isHTMLElement(input) && input.nodeType === 1;
export const isUnknownElement = input => Object.prototype.toString.call(input) === '[object HTMLUnknownElement]';