/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Connection as PrismaConnection,
  KnowledgeBase as PrismaKnowledgeBase,
} from "@prisma/client";

export class ConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConnectionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.connection.count(args);
  }

  async connections<T extends Prisma.ConnectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConnectionFindManyArgs>
  ): Promise<PrismaConnection[]> {
    return this.prisma.connection.findMany<Prisma.ConnectionFindManyArgs>(args);
  }
  async connection<T extends Prisma.ConnectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConnectionFindUniqueArgs>
  ): Promise<PrismaConnection | null> {
    return this.prisma.connection.findUnique(args);
  }
  async createConnection<T extends Prisma.ConnectionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConnectionCreateArgs>
  ): Promise<PrismaConnection> {
    return this.prisma.connection.create<T>(args);
  }
  async updateConnection<T extends Prisma.ConnectionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConnectionUpdateArgs>
  ): Promise<PrismaConnection> {
    return this.prisma.connection.update<T>(args);
  }
  async deleteConnection<T extends Prisma.ConnectionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConnectionDeleteArgs>
  ): Promise<PrismaConnection> {
    return this.prisma.connection.delete(args);
  }

  async getKnowledgeBase(
    parentId: string
  ): Promise<PrismaKnowledgeBase | null> {
    return this.prisma.connection
      .findUnique({
        where: { id: parentId },
      })
      .knowledgeBase();
  }
}