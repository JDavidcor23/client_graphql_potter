import { ApolloServer, gql } from "apollo-server";
import "./db.js";
import Character from "./models/character.model.js";

export const typeDefs = gql`
  type Character {
    _id: ID!
    name: String!
    img: String!
    isAlive: Boolean!
  }
  type Query {
    characters: [Character]
  }
  type Mutation {
    addCharacter(name: String!, img: String!, isAlive: Boolean!): Character!
    deleteCharacter(name: String!): String
    changeCharacterStatus(name: String!, isAlive: Boolean!): Character!
  }
`;

const resolvers = {
  Query: {
    characters: (__, args, context) => {
      return Character.collection.find({}).toArray();
    },
  },
  Mutation: {
    addCharacter: (__, { name, img, isAlive }) => {
      const newCharacter = new Character({ name, img, isAlive });
      return newCharacter.save();
    },
    deleteCharacter: (__, args) => {
      Character.collection.deleteOne({ name: args.name });
      return args.name;
    },
    changeCharacterStatus: (__, args) => {
      Character.collection.updateOne(
        { name: args.name },
        //$set significa que solo se va a cambiar el valor de isAlive
        { $set: { isAlive: !args.isAlive } }
      );
      return Character.collection.findOne({ name: args.name });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Character,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
