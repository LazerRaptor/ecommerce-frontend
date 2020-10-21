import { classnames } from '../classnames'


const obj = {
    menu: true,
    outlined: true,
    withShadow: false,
}

test(`tested object: ${obj}`, () => {
    expect(classnames(obj)).toBe('menu outlined')
})

