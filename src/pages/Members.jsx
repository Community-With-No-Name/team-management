import React from 'react'
import Layout from '../components/Layout'
import HomeComponent from "../components/HomeComponent"
import MembersCard from '../components/Members/MembersCard'
import { useQuery } from 'react-query';
import { queryKeys } from '../api/queryKey';
import { getRequest } from '../api/apiCall';
import { GET_USERS } from '../api/apiUrl';
export default function Members(props) {
    const { data } = useQuery(
        queryKeys.getUsers,
        async () => await getRequest({ url: GET_USERS }),
        {
          retry: 2,
        }
      );
      const [users, setUsers] = React.useState(data?.data)
      React.useEffect(()=>{
          setUsers(data?.data)
      },[data?.data])
    return (
        <Layout page="Members" props={props}>
            <div className="px-6">
            <MembersCard users={users} />
            </div>
        </Layout>
    )
}
