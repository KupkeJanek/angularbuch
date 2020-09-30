interface MaxResult {
  result: number;
  index: number;
}
interface MyMathLib {
  /**
   * The method returns the maximum as well as the index of the
   * maximum of the provided Array of numbers.
   *
   * @param values An Array of number-values.
   * @return Returns an object containing the maximum value and
   * the index of the maximum value
   */
  max(values: Array<number>): MaxResult;
}
declare var MyMathLib: MyMathLib;