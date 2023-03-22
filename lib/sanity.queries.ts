import { groq } from 'next-sanity'

/*
	This is for posts
*/
const postFields = groq`
	...,
	author->,
	categories[]->
`

export const allPosts = groq`
*[_type == "post"] | order(_createdAt desc) {
  ${postFields}
}`

export const featuredPostsQuery = groq`
*[_type == "post" && featured == true] | order(_createdAt desc) {
  ${postFields}
}`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

/*
	This is for projects
*/
export const allProjects = groq`
*[_type == "projects"] | order(_createdAt desc) {
  ${postFields}
}`

export const projectsPostsQuery = groq`
*[_type == "projects" && slug.current == $slug][0] {
  ${postFields}
}`

/*
	This is for services
*/
export const allServices = groq`
*[_type == "services"] | order(_createdAt desc) {
  ...,
}`
