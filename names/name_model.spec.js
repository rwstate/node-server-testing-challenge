const db = require('../data/dbconfig.js')

const Names = require('../names/name_model.js')

beforeEach(async () => {
  await db('name').truncate()
})

describe('names model', () => {
  describe('addName()', () => {
    it('should add the given name to the db', async () => {
      await Names.addName({name: "Todd"})
  
      const names = await db('name')
  
      expect(names).toHaveLength(1)
    })

    it('should throw an error if no name is given', async () => {
      await expect(Names.addName({})).rejects.toThrow()
    })
  })

  describe('removeName()', () => {
    it('should remove the given name from the db', async () => {
      await Names.addName({name: "Todd"})

      await Names.removeName({name: "Todd"})

      names = await db('name')

      expect(names).toHaveLength(0)

    })

    it('throw an error if the name does not exist', async () => {
  
      await Names.addName({name: "Todd"})

      await expect(Names.removeName({name: "Bill"})).resolves.toBe(0)
    })
  })
})