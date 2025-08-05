import api from "@/lib/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useGetUserNotifications = (query?: {
  filter?: { status?: string }
  limit?: string
}) => {
  return useQuery({
    queryKey: ["me-notifications", query],
    queryFn: () => api.v0.getMeNotifications(query),
  })
}

interface EditReadPayload {
  userNotificationIds?: string[]
  markAllAsRead?: boolean
}

export const useEditNotificationsAsRead = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: EditReadPayload) =>
      api.v0.editMeNotificationsAsRead(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me-notifications"] })
    },
  })
}
