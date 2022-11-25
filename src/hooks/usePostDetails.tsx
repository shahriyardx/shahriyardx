import { trpc } from "utils/trpc";

export const usePostDetails = (postId: string, dontRefetch: boolean) => {
  const { data, isLoading, refetch } = trpc.post.byId.useQuery(
    {
      postId: postId,
    },

    {
      refetchOnWindowFocus: dontRefetch,
    }
  );

  return { post: data, isLoading, refetch };
};
