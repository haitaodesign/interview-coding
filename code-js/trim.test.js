import { expect, test } from 'vitest'
import { trim } from './trim'
test('去除字符串的头尾空格', () => {
    expect(trim('  liht  ')).toBe('liht')
    expect(trim('  liht')).toBe('liht')
    expect(trim('liht  ')).toBe('liht')
})