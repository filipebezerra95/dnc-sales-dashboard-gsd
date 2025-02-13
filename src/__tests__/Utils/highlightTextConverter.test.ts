import { highlightTextConverter } from '@/utils'

describe('highlightTextConverter', () => {
  it('should return the correct text for "alert', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de ser batida')
  })

  it('should return the correct text for "success', () => {
    expect(highlightTextConverter('success')).toBe(
      '* A meta do mes foi batida ! parabens!'
    )
  })

  it('should return the correct text for "warning', () => {
    expect(highlightTextConverter('warning')).toBe('* falta pouco vamos la!')
  })

  it('should return the default for unknow input', () => {
    expect(highlightTextConverter('un')).toBe('* sem dados no momento')
  })
})
