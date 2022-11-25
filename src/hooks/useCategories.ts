import { trpc } from "utils/trpc"

export const useCategories = () => {
  const { data, isLoading, refetch } = trpc.category.all.useQuery()
  return { categories: data, isLoading, refetch }
}
