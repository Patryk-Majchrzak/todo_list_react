import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const useGetQueryParameter = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
}