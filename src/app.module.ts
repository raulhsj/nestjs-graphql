import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, // code-first approach
      driver: ApolloDriver,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
