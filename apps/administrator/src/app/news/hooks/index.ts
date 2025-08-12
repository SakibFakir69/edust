import { defaultValues } from "@/configs"
import axios from "@/lib/axios"
import { ApiResponse } from "@edust/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  CategoryItem,
  NewsDetails,
  NewsItem,
  SourceItem,
  TagItem,
} from "../types"

const baseUrl = `${defaultValues.apiV0AdmURL}/news`

export const newsCategoryHooks = {
  useGetCategories: () => {
    return useQuery<ApiResponse<{ items: CategoryItem[] }>>({
      queryKey: ["newsCategories"],
      queryFn: async (): Promise<ApiResponse<{ items: CategoryItem[] }>> => {
        const response = await axios.get(`${baseUrl}/categories`)
        return response.data
      },
    })
  },
  useGetCategoryById: (categoryId: string | null) => {
    return useQuery<ApiResponse<{ item: CategoryItem }>>({
      queryKey: ["newsCategory", categoryId],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}/categories/${categoryId}`)
        return response.data
      },
      enabled: !!categoryId,
    })
  },
  usePostCategory: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: CategoryItem }>,
      unknown,
      { body: unknown }
    >({
      mutationFn: async ({ body }) => {
        const response = await axios.post(`${baseUrl}/categories`, body)
        return response.data
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["newsCategories"] })
      },
    })
  },
  usePatchCategoryById: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: CategoryItem }>,
      unknown,
      { categoryId: string; body: unknown }
    >({
      mutationFn: async ({ categoryId, body }) => {
        const response = await axios.patch(
          `${baseUrl}/categories/${categoryId}`,
          body,
        )
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["newsCategories"] })
        queryClient.invalidateQueries({
          queryKey: ["newsCategory", variables.categoryId],
        })
      },
    })
  },
  useDeleteCategoryById: () => {
    const queryClient = useQueryClient()
    return useMutation<ApiResponse<null>, unknown, { categoryId: string }>({
      mutationFn: async ({ categoryId }) => {
        const response = await axios.delete(
          `${baseUrl}/categories/${categoryId}`,
        )
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["newsCategories"] })
        queryClient.invalidateQueries({
          queryKey: ["newsCategory", variables.categoryId],
        })
      },
    })
  },
}

export const newsSourceHooks = {
  useGetSources: () => {
    return useQuery<ApiResponse<{ items: SourceItem[] }>>({
      queryKey: ["newsSources"],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}/sources`)
        return response.data
      },
    })
  },

  useGetSourceById: (sourceId: string | null) => {
    return useQuery<ApiResponse<{ item: SourceItem }>>({
      queryKey: ["newsSource", sourceId],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}/sources/${sourceId}`)
        return response.data
      },
      enabled: !!sourceId,
    })
  },

  usePostSource: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: SourceItem }>,
      unknown,
      { body: unknown }
    >({
      mutationFn: async ({ body }) => {
        const response = await axios.post(`${baseUrl}/sources`, body)
        return response.data
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["newsSources"] })
      },
    })
  },

  usePatchSourceById: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: SourceItem }>,
      unknown,
      { sourceId: string; body: unknown }
    >({
      mutationFn: async ({ sourceId, body }) => {
        const response = await axios.patch(
          `${baseUrl}/sources/${sourceId}`,
          body,
        )
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["newsSources"] })
        queryClient.invalidateQueries({
          queryKey: ["newsSource", variables.sourceId],
        })
      },
    })
  },

  useDeleteSourceById: () => {
    const queryClient = useQueryClient()
    return useMutation<ApiResponse<null>, unknown, { sourceId: string }>({
      mutationFn: async ({ sourceId }) => {
        const response = await axios.delete(`${baseUrl}/sources/${sourceId}`)
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["newsSources"] })
        queryClient.invalidateQueries({
          queryKey: ["newsSource", variables.sourceId],
        })
      },
    })
  },
}

export const newsTagHooks = {
  useGetTags: () => {
    return useQuery<ApiResponse<{ items: TagItem[] }>>({
      queryKey: ["newsTags"],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}/tags`)
        return response.data
      },
    })
  },

  useGetTagById: (tagId: string | null) => {
    return useQuery<ApiResponse<{ item: TagItem }>>({
      queryKey: ["newsTag", tagId],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}/tags/${tagId}`)
        return response.data
      },
      enabled: !!tagId,
    })
  },

  usePostTag: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: TagItem }>,
      unknown,
      { body: unknown }
    >({
      mutationFn: async ({ body }) => {
        const response = await axios.post(`${baseUrl}/tags`, body)
        return response.data
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["newsTags"] })
      },
    })
  },

  usePatchTagById: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: TagItem }>,
      unknown,
      { tagId: string; body: unknown }
    >({
      mutationFn: async ({ tagId, body }) => {
        const response = await axios.patch(`${baseUrl}/tags/${tagId}`, body)
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["newsTags"] })
        queryClient.invalidateQueries({
          queryKey: ["newsTag", variables.tagId],
        })
      },
    })
  },

  useDeleteTagById: () => {
    const queryClient = useQueryClient()
    return useMutation<ApiResponse<null>, unknown, { tagId: string }>({
      mutationFn: async ({ tagId }) => {
        const response = await axios.delete(`${baseUrl}/tags/${tagId}`)
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["newsTags"] })
        queryClient.invalidateQueries({
          queryKey: ["newsTag", variables.tagId],
        })
      },
    })
  },
}

export const newsHooks = {
  useGetNews: () => {
    return useQuery<ApiResponse<{ items: NewsItem[] }>>({
      queryKey: ["news"],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}`)
        return response.data
      },
    })
  },

  useGetNewsById: (newsId: string | null) => {
    return useQuery<ApiResponse<NewsDetails>>({
      queryKey: ["newsItem", newsId],
      queryFn: async () => {
        const response = await axios.get(`${baseUrl}/${newsId}`)
        return response.data
      },
      enabled: !!newsId,
    })
  },

  usePostNews: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: NewsItem }>,
      unknown,
      { body: unknown }
    >({
      mutationFn: async ({ body }) => {
        const response = await axios.post(`${baseUrl}`, body)
        return response.data
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["news"] })
      },
    })
  },

  usePatchNewsById: () => {
    const queryClient = useQueryClient()
    return useMutation<
      ApiResponse<{ item: NewsItem }>,
      unknown,
      { newsId: string; body: unknown }
    >({
      mutationFn: async ({ newsId, body }) => {
        const response = await axios.patch(`${baseUrl}/${newsId}`, body)
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["news"] })
        queryClient.invalidateQueries({
          queryKey: ["newsItem", variables.newsId],
        })
      },
    })
  },

  useDeleteNewsById: () => {
    const queryClient = useQueryClient()
    return useMutation<ApiResponse<null>, unknown, { newsId: string }>({
      mutationFn: async ({ newsId }) => {
        const response = await axios.delete(`${baseUrl}/${newsId}`)
        return response.data
      },
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ["news"] })
        queryClient.invalidateQueries({
          queryKey: ["newsItem", variables.newsId],
        })
      },
    })
  },
}
