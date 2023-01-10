import {
  members,
  member,
  createMember,
  updateMember,
  deleteMember,
} from './members'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('members', () => {
  scenario('returns all members', async (scenario) => {
    const result = await members()

    expect(result.length).toEqual(Object.keys(scenario.member).length)
  })

  scenario('returns a single member', async (scenario) => {
    const result = await member({ id: scenario.member.one.id })

    expect(result).toEqual(scenario.member.one)
  })

  scenario('creates a member', async () => {
    const result = await createMember({
      input: { rank: 'String', last_name: 'String', first_name: 'String' },
    })

    expect(result.rank).toEqual('String')
    expect(result.last_name).toEqual('String')
    expect(result.first_name).toEqual('String')
  })

  scenario('updates a member', async (scenario) => {
    const original = await member({ id: scenario.member.one.id })
    const result = await updateMember({
      id: original.id,
      input: { rank: 'String2' },
    })

    expect(result.rank).toEqual('String2')
  })

  scenario('deletes a member', async (scenario) => {
    const original = await deleteMember({
      id: scenario.member.one.id,
    })
    const result = await member({ id: original.id })

    expect(result).toEqual(null)
  })
})
