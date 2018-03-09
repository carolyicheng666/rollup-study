import answer from 'the-answer';
import _ from 'lodash';

export default function () {
  var result = _.compact([0, 1, false, 2, '', 3, answer]);
  console.log('the answer is ' + result);
}