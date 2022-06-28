import { expect, test } from 'vitest'
import { numberFormat, numberFormatByToLocaleString, numberFormatByRegExpAndReplace } from './numberFormat'
test('千分位分隔符', () => {
    expect(numberFormat(1334343)).toBe('1,334,343')
    expect(numberFormat(1334343.2223)).toBe('1,334,343.2223')
    expect(numberFormatByToLocaleString(1334343)).toBe('1,334,343')
    // 自带方法会进行四舍五入
    expect(numberFormatByToLocaleString(1334343.2223)).toBe('1,334,343.222')
    expect(numberFormatByToLocaleString(1334343.2225)).toBe('1,334,343.223')
    expect(numberFormatByRegExpAndReplace(1334343)).toBe('1,334,343')
    expect(numberFormatByRegExpAndReplace(1334343.2223)).toBe('1,334,343.2223')
})