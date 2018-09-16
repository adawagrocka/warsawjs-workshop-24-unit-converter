const supertest = require('supertest');
const { server, url} = require('../../backend/server');
const request = supertest(url)

describe('temperature api', () => {
  it('should work', async() => {

    await server
    await request.get('api/aaaa').expect(404)
    //expect(example(10)).toBe(11);
  });
  it('good route should return 200', async()=>{
    await server
    await request.get('api/temperature').expect(200)
  });
  it('temp converter ', async ()=>{
    await server
    await request.get('api/temperature?fromValue=50&fromUnit=C&toUnit=F')
    .expect(200)
    .expect({"type":"temperature","fromValue":"50","fromUnit":"C","toUnit":"F","result":122})
  })
});
