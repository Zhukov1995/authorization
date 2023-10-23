import { gql } from "@apollo/client";

export const USER_AUTH = gql`
    mutation UserAuth($username:String!,$password:String!) {
        login(username:$username,password:$password) {
            username
            password
            token
        }
}
`;

export const GET_DASHBOARD = gql`
query dashboard {
    dashboard {
        scenarios {
            active
            inactive
            completed
        }
        lists {
            active
            inactive
            completed
        }
        dialogs {
            active
            inactive
            completed
        }
    }
}
`;