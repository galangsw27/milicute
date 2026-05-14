import { NextResponse } from 'next/server'

const CATALOG_URL =
  'https://catalog.roblox.com/v2/search/items/details?taxonomy=tZsUsd2BqGViQrJ9Vs3Wah&salesTypeFilter=1&categoryFilter=6&limit=120'

function mapItem(item) {
  return {
    id: String(item.id),
    name: item.name || 'Unknown',
    price: item.price && item.price > 0 ? `${item.price} R$` : 'Free',
    thumbnail: `rbxthumb://type=Asset&id=${item.id}&w=150&h=150`,
    assetType: Number(item.assetType) || 0,
  }
}

export async function GET() {
  try {
    const res = await fetch(CATALOG_URL)
    const decoded = await res.json()

    if (!decoded || !Array.isArray(decoded.data)) {
      return NextResponse.json({ error: 'json_invalid' }, { status: 500 })
    }

    const mapped = decoded.data.filter((item) => item.id).map(mapItem)
    return NextResponse.json({ items: mapped })
  } catch (error) {
    return NextResponse.json(
      { error: `http_failed: ${String(error)}` },
      { status: 500 }
    )
  }
}
