import { anyPass, isNil, isEmpty } from "ramda";

export const isNilOrEmpty = anyPass([isNil, isEmpty]);
