export enum NewsStatus {
  DRAFT = "DRAFT",
  PENDING_REVIEW = "PENDING_REVIEW",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
  REJECTED = "REJECTED",
}

export type NewsDetails = {
  id: string
  title: string
  slug: string
  summary: string
  contentHtml: string
  sourceLink: string
  thumbnailUrl: string
  category: {
    id: string
    name: string
    slug: string
  }
  metaTitle: string
  metaDesc: string
  source: {
    id: string
    name: string
    logoUrl: string
  }
  tags: {
    id: string
    name: string
    slug: string
  }[]
  publishedAt: string // ISO date
  authorId: string
  approvedBy: string | null
  statusReason: string | null
  status: NewsStatus
  createdAt: string
  updatedAt: string
}

export type NewsItem = {
  id: string
  title: string
  slug: string
  thumbnailUrl: string
  category: {
    id: string
    name: string
  }
  publishedAt: string
  status: NewsStatus
}

export enum BaseStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ARCHIVED = "ARCHIVED",
  DELETED = "DELETED",
}

export type Base = {
  id: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  status: BaseStatus
}

export type CategoryItem = Base

export type TagItem = Base

export type SourceItem = Omit<Base, "status"> & {
  websiteUrl: string
  logoUrl: string
  description: string
}
