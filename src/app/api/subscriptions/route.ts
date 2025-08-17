import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status') || 'ACTIVE'

    const skip = (page - 1) * limit

    // Get subscriptions with pagination
    const subscriptions = await prisma.subscription.findMany({
      where: {
        status: status as any
      },
      orderBy: {
        subscribedAt: 'desc'
      },
      skip,
      take: limit,
      select: {
        id: true,
        email: true,
        subscribedAt: true,
        status: true,
        source: true
      }
    })

    // Get total count
    const totalCount = await prisma.subscription.count({
      where: {
        status: status as any
      }
    })

    // Get analytics
    const analytics = await prisma.subscription.groupBy({
      by: ['status'],
      _count: {
        status: true
      }
    })

    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      subscriptions,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      analytics: analytics.reduce((acc, item) => {
        acc[item.status] = item._count.status
        return acc
      }, {} as Record<string, number>)
    })

  } catch (error) {
    console.error('Error fetching subscriptions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    )
  }
}