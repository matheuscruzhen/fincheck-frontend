import { useQuery } from '@tanstack/react-query';
import { categoriesService } from '../services/categoriesServices';

export function useCategories() {
  const { data, isFetching: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesService.getAll,
  });

  return { categories: data ?? [], isLoadingCategories };
}
