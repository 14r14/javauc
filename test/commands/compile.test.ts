import {expect, test} from '@oclif/test'

describe('compile', () => {
  test
  .stdout()
  .command(['compile'])
  .it('runs compile', ctx => {
    expect(ctx.stdout).to.contain('[Successfully Compiled]')
  })
})
