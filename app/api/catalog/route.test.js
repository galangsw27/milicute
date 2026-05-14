import { GET } from './route'

describe('/api/catalog GET', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('returns mapped items when upstream payload valid', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({
        data: [
          { id: 101, name: 'Hat', price: 50, assetType: 6 },
          { id: 102, name: null, price: 0, assetType: null },
        ],
      }),
    })

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body).toEqual({
      items: [
        {
          id: '101',
          name: 'Hat',
          price: '50 R$',
          thumbnail: 'rbxthumb://type=Asset&id=101&w=150&h=150',
          assetType: 6,
        },
        {
          id: '102',
          name: 'Unknown',
          price: 'Free',
          thumbnail: 'rbxthumb://type=Asset&id=102&w=150&h=150',
          assetType: 0,
        },
      ],
    })
  })

  test('returns json_invalid when upstream payload has no data array', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ wrong: [] }),
    })

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(500)
    expect(body).toEqual({ error: 'json_invalid' })
  })

  test('returns http_failed when upstream fetch throws', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('network down'))

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(500)
    expect(body).toEqual({ error: 'http_failed: Error: network down' })
  })
})
