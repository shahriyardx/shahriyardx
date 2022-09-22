import { trpc } from "utils/trpc"

export const useCategories = () => {
  const { data, isLoading, refetch } = trpc.useQuery(["category.all"])
  return { categories: data, isLoading, refetch }
}
