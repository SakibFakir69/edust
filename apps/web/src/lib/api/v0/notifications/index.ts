import { defaultValues } from "@/configs"
import axios from "@/lib/axios"

const BASE_URL = `${defaultValues.apiV0URL}/notifications/me`

export const getMeNotifications = async (query?: {
  filter?: { status?: string }
  limit?: string
}): Promise<any> => {
  const response = await axios.get(`${BASE_URL}`, { params: query })
  return response.data
}

export interface EditReadPayload {
  userNotificationIds?: string[]
  markAllAsRead?: boolean
}

export const editMeNotificationsAsRead = async (
  payload: EditReadPayload,
): Promise<any> => {
  const response = await axios.patch(`${BASE_URL}/read`, payload)
  return response.data
}
