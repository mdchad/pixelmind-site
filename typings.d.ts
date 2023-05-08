import { Reference } from 'sanity'

type Base = {
	_createdAt: string
	_id: string
	_rev: string
	_type: string
	_updatedAt: string
}

interface Post extends Base {
	_id: string
	author: Author
	body: Block[]
	categories: Category[]
	mainImage: Image
	slug: Slug
	title: string
	excerpt: string
	featured: boolean
}

interface Author extends Base {
	bio: Block[]
	image: Image
	name: string
	slug: Slug
}

interface Image {
	_type: 'image'
	asset: Reference
	alt: any
}

interface Reference {
	_ref: string
	_type: 'reference'
}

interface Slug {
	_type: 'slug'
	current: string
}

interface Block {
	_key: string
	_type: 'block'
	children: Span[]
	markDefs: any[]
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
	_key: string
	_type: 'span'
	marks: string[]
	text: string
}

interface Category extends Base {
	description: string
	title: string
}

interface mainImage {
	_type: 'image'
	asset: Reference
}

interface Title {
	_type: 'title'
	current: string
}

interface Preview {
	_type: 'preview'
	current: boolean
}

interface Cards {
	className?: string
	sm?: number
	md?: number
	lg?: number
	xl?: number
	children: React.ReactNode
	key?: any
	uid?: any
}

interface Services extends Base {
	[x: string]: any
	title: string
	description: string
}

interface Projects extends Base {
	_id: string
	author: Author
	body: Block[]
	categories: Category[]
	mainImage: Image
	title: string
	slug: Slug
	description: string
	excerpt: string
	client: string
	uid: number
}

interface SEO {
	title?: string
	description?: string
	keywords?: string
	image?: string
}

interface Linktree {
	_id: string
	title?: string
	href?: string
	image?: string | null
	status?: string
}
