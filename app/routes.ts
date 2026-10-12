import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/list.tsx"),    
  route("detail", "routes/detail.tsx"), // 여기서 추가할 때는 route 
] satisfies RouteConfig;