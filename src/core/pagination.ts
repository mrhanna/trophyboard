import { Prisma } from "../../generated/prisma";

type FindManyArgs<T extends keyof Prisma.TypeMap['model']> =
    Prisma.TypeMap['model'][T]['operations']['findMany']['args'];

export type PaginationOptions<T extends keyof Prisma.TypeMap['model']> = Pick<
    FindManyArgs<T>,
    'cursor' | 'take' | 'skip' | 'orderBy'
>;