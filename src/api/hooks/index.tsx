import { useQuery } from "@apollo/client"
import { GET_PLAYERS_AND_MATCHES } from "../queries"
import type { Stats } from "../types"


const useAllPlayersAndMatches = () => {
    const { data, loading, error } = useQuery<Stats>(GET_PLAYERS_AND_MATCHES)
    return { data, loading, error }
}

export default useAllPlayersAndMatches