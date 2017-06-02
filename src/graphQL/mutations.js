import { gql } from 'react-apollo';

export const AddToMemberCart = gql`
  mutation AddToMemberCart(
    $userId: ID!
    $qty: Int!
    $nicotineStrength: Int!
    $product: ID!
  ) {
    AddToMemberCart(
      userId: $userId
      qty: $qty
      nicotineStrength: $nicotineStrength
      product: $product
    ) {
      _id
      name {
        first
        last
        display
      }
      pictures {
        small
        large
        default
      }
      authentication {
        signedUp
        password
        createdAt
        totalLogins
        logins {
          date
          device
        }
        ageVerified
        auth0Identities {
          provider
          user_id
          connection
          isSocial
        }
      }
      contactInfo {
        email
        phone
        locale
        timezone
        location {
          ipAddress
          lat
          long
          country
        },
        devices {
          hardware
          os
        }
        socialNetworks {
          name
          link
        }
      }
      permissions {
        role
      }
      shopping {
        cart {
          qty
          product
          nicotineStrength
        }
        transactions
      }
      permissions {
        role
      }
      userStory {
        age
        birthday
        bio
        gender
      }
      socialProfileBlob {
        line
        facebook
        google
        twitter
        linkedin
      }
    }
  }
`;
export const EditToMemberCart = gql`
  mutation EditToMemberCart(
    $userId: ID!
    $products: [ProductsInput]!
  ) {
    EditToMemberCart(
      userId: $userId
      qty: $qty
      nicotineStrength: $nicotineStrength
      product: $product
    ) {
      shopping {
        cart {
          qty
          product
          nicotineStrength
        }
      }
    }
  }
`;

export const DeleteFromMemberCart = gql`
  mutation DeleteFromMemberCart(
    $productId: ID!,
    $userId: ID!
  ){
    DeleteFromMemberCart(productId: $productId, userId: $userId){
      _id
      name {
        first
        last
        display
      }
      pictures {
        small
        large
        default
      }
      authentication {
        signedUp
        password
        createdAt
        totalLogins
        logins {
          date
          device
        }
        ageVerified
        auth0Identities {
          provider
          user_id
          connection
          isSocial
        }
      }
      contactInfo {
        email
        phone
        locale
        timezone
        location {
          ipAddress
          lat
          long
          country
        },
        devices {
          hardware
          os
        }
        socialNetworks {
          name
          link
        }
      }
      permissions {
        role
      }
      shopping {
        cart {
          qty
          product
          nicotineStrength
        }
        transactions
      }
      permissions {
        role
      }
      userStory {
        age
        birthday
        bio
        gender
      }
      socialProfileBlob {
        line
        facebook
        google
        twitter
        linkedin
      }
    }
  }
`;
