// ============= Test Cases =============
import type { Equal, Expect, NotEqual,ExpandRecursively } from './test-utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]


// ============= Your Code Here =============
type Flip<T extends Record<any,any>> = {
  [P in keyof T as `${T[P]}`]:P
}

let a:Flip<{ pi: 3.14; bool: true }>



  type A = ExpandRecursively<Flip<{ pi: 3.14; bool: true }>>