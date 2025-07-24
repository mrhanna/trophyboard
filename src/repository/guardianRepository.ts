import { Guardian, PrismaClient } from '../../generated/prisma';

export default function createGuardianRepository(prisma: PrismaClient) {
    return {
        async findById(id: string): Promise<Guardian | null> {
            return prisma.guardian.findUnique({
                where: {
                    id,
                },
                include: {
                    children: true,
                },
            });
        },

        async findByTenantId(tenantId: string): Promise<Guardian[]> {
            return prisma.guardian.findMany({
                where: {
                    tenantId,
                },
            });
        },

        async update(id: string, data: Guardian): Promise<Guardian> {
            return prisma.guardian.update({
                where: {
                    id,
                },
                data,
            });
        },

        async delete(id: string): Promise<Guardian> {
            return prisma.guardian.delete({
                where: {
                    id,
                },
            });
        },

        async create(data: Guardian): Promise<Guardian> {
            return prisma.guardian.create({
                data,
            });
        },
    };
}
