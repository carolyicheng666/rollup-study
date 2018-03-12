import answer from 'the-answer';
import pkg from './package.json';

export default function () {
  console.log('the answer is ' + answer + ', the version is ' + pkg.version);
}