export function extractAxiosErrorMessage(
  error: unknown,
  fallback = "Something went wrong",
) {
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    typeof (error as any).response?.data?.message === "string"
  ) {
    return (error as any).response.data.message
  }

  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    Array.isArray((error as any).response?.data?.message)
  ) {
    return (error as any).response.data.message.join(", ")
  }

  return fallback
}
