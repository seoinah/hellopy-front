import { useQuery } from "react-query";
import { AboutService } from "@/service/aboutService.ts";

export const useGetCalendars = () => {
  return useQuery({
    queryKey: [AboutService.QueryKey.getCalendars],
    queryFn: () => AboutService.getCalendars(),
  });
};
