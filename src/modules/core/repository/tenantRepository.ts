import { PrismaClient, Tenant } from '@prisma';
import { PaginationOptions } from '@/shared/pagination';

export function createTenantRepository(prisma: PrismaClient) {
    return {
        async getById(id: string): Promise<Tenant | null> {
            return prisma.tenant.findUnique({
                where: {
                    id,
                },
            });
        },

        async getAll(
            options: PaginationOptions<'Tenant'> = {
                take: 10,
                skip: 0,
            },
        ): Promise<Tenant[]> {
            return prisma.tenant.findMany(options);
        },

        async create(data: Tenant): Promise<Tenant> {
            return prisma.tenant.create({
                data,
            });
        },

        async update(id: string, data: Tenant): Promise<Tenant> {
            return prisma.tenant.update({
                where: {
                    id,
                },
                data,
            });
        },

        async delete(id: string): Promise<Tenant> {
            return prisma.tenant.delete({
                where: {
                    id,
                },
            });
        },
    };
}
