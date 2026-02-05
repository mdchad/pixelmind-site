import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Pixelmind Studio'
  const subtitle = searchParams.get('subtitle') || 'Digital Architecture Lab'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#000',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#fff',
            }}
          />
          <span
            style={{
              color: '#444',
              fontSize: '24px',
              letterSpacing: '2px',
            }}
          >
            www.pixelmindstudio.co
          </span>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#fff',
              lineHeight: 1.2,
              letterSpacing: '-2px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#888',
              letterSpacing: '1px',
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            color: '#444',
            fontSize: '20px',
          }}
        >
          <span style={{ color: '#fff' }}>▸</span>
          <span>Building Bridges Between Business & Technology</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  ) as unknown as Response
}
